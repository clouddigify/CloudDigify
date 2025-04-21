// This would be deployed as a serverless function on Vercel
import { Octokit } from '@octokit/rest';

// GitHub repository details
const GITHUB_REPO = 'CloudDigify';
const GITHUB_OWNER = process.env.GITHUB_OWNER || 'chiragmalhotra98';
const GITHUB_BRANCH = 'main';

// In production, move this to environment variables
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

// Helper to validate token (in production, use proper JWT verification)
const validateToken = (authHeader) => {
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return false;
  }
  
  const token = authHeader.split(' ')[1];
  try {
    const decoded = JSON.parse(atob(token));
    return decoded.role === 'admin';
  } catch (error) {
    return false;
  }
};

// Map of page paths to file paths in the repository
const pagePathMap = {
  // Home page
  'home': 'src/components/pages/Home.jsx',
  
  // Main pages
  'about': 'src/components/pages/About.jsx',
  'services': 'src/components/pages/Services.jsx',
  'training': 'src/components/pages/Training.jsx',
  'blogs': 'src/components/pages/Blogs.jsx',
  'contact': 'src/components/pages/Contact.jsx',
  
  // Service pages
  'services/devops': 'src/components/pages/services/DevOps.jsx',
  'services/cloud-migration': 'src/components/pages/services/CloudMigration.jsx',
  'services/managed-services': 'src/components/pages/services/ManagedServices.jsx',
  'services/infrastructure-as-code': 'src/components/pages/services/InfrastructureAsCode.jsx',
  'services/architecture-design': 'src/components/pages/services/ArchitectureDesign.jsx',
  'services/security-compliance': 'src/components/pages/services/SecurityCompliance.jsx',
  
  // Legal pages
  'terms': 'src/components/pages/legal/TermsAndConditions.jsx',
  'privacy': 'src/components/pages/legal/PrivacyPolicy.jsx',
  'cookies': 'src/components/pages/legal/CookiePolicy.jsx',
};

// Function to extract content from React component file
const extractComponentContent = (fileContent) => {
  // This is a simplified extraction - in production, use proper AST parsing
  try {
    // Extract JSX content between the return statement and the closing parenthesis
    const returnPattern = /return\s*\(\s*(?:<.*>)?([\s\S]*?)(?:<\/.*>)?\s*\);/;
    const match = returnPattern.exec(fileContent);
    
    if (match && match[1]) {
      return match[1].trim();
    }
    
    // Fallback: If no return statement found, return the whole file
    return fileContent;
  } catch (error) {
    console.error('Error extracting component content:', error);
    return fileContent;
  }
};

// Function to update component content in a file
const updateComponentContent = (fileContent, newContent) => {
  // This is a simplified replacement - in production, use proper AST parsing
  try {
    // Replace content between the return statement and the closing parenthesis
    const returnPattern = /(return\s*\(\s*)(?:<.*>)?([\s\S]*?)(?:<\/.*>)?(\s*\);)/;
    return fileContent.replace(returnPattern, `$1${newContent}$3`);
  } catch (error) {
    console.error('Error updating component content:', error);
    return fileContent;
  }
};

export default async function handler(req, res) {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Initialize GitHub client
  let octokit;
  try {
    octokit = new Octokit({
      auth: GITHUB_TOKEN
    });
  } catch (error) {
    return res.status(500).json({ 
      message: 'Failed to initialize GitHub client', 
      error: error.message 
    });
  }

  // GET - Fetch content
  if (req.method === 'GET') {
    try {
      const { path } = req.query;
      
      if (!path || !pagePathMap[path]) {
        return res.status(404).json({ message: 'Page not found' });
      }
      
      const filePath = pagePathMap[path];
      
      // Get file content from GitHub
      const { data } = await octokit.repos.getContent({
        owner: GITHUB_OWNER,
        repo: GITHUB_REPO,
        path: filePath,
        ref: GITHUB_BRANCH
      });
      
      // Decode content
      const fileContent = Buffer.from(data.content, 'base64').toString();
      
      // Extract the component content
      const content = extractComponentContent(fileContent);
      
      return res.status(200).json({
        title: path.split('/').pop().replace(/-/g, ' '),
        content,
        sha: data.sha, // Used for updates
        path: filePath
      });
    } catch (error) {
      console.error('Error fetching content:', error);
      return res.status(500).json({ 
        message: 'Failed to fetch content', 
        error: error.message 
      });
    }
  }

  // POST - Update content
  if (req.method === 'POST') {
    // Validate auth token
    if (!validateToken(req.headers.authorization)) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
      const { path, content, commitMessage } = req.body;
      
      if (!path || !pagePathMap[path] || !content) {
        return res.status(400).json({ message: 'Path and content are required' });
      }
      
      const filePath = pagePathMap[path];
      
      // Get current file content and SHA from GitHub
      const { data: fileData } = await octokit.repos.getContent({
        owner: GITHUB_OWNER,
        repo: GITHUB_REPO,
        path: filePath,
        ref: GITHUB_BRANCH
      });
      
      // Decode current content
      const currentFileContent = Buffer.from(fileData.content, 'base64').toString();
      
      // Update the component content in the file
      const updatedFileContent = updateComponentContent(currentFileContent, content);
      
      // Update file in GitHub
      const response = await octokit.repos.createOrUpdateFileContents({
        owner: GITHUB_OWNER,
        repo: GITHUB_REPO,
        path: filePath,
        message: commitMessage || `Update ${path} content`,
        content: Buffer.from(updatedFileContent).toString('base64'),
        sha: fileData.sha,
        branch: GITHUB_BRANCH
      });
      
      return res.status(200).json({
        message: 'Content updated successfully',
        commit: response.data.commit
      });
    } catch (error) {
      console.error('Error updating content:', error);
      return res.status(500).json({ 
        message: 'Failed to update content', 
        error: error.message 
      });
    }
  }

  return res.status(405).json({ message: 'Method not allowed' });
} 