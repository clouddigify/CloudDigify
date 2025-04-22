// This would be deployed as a serverless function on Vercel
import { Octokit } from '@octokit/rest';

// GitHub repository details
const GITHUB_REPO = 'CloudDigify';
const GITHUB_OWNER = process.env.GITHUB_OWNER || 'chiragmalhotra98';
const GITHUB_BRANCH = 'main';

// In production, move this to environment variables
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

// Node.js doesn't have atob/btoa - add polyfill for atob
const atob = (base64) => {
  return Buffer.from(base64, 'base64').toString('binary');
};

// Helper to validate token (in production, use proper JWT verification)
const validateToken = (authHeader) => {
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return false;
  }
  
  const token = authHeader.split(' ')[1];
  try {
    const decoded = JSON.parse(atob(token));
    console.log('Token validation attempt:', decoded);
    return decoded.role === 'admin';
  } catch (error) {
    console.error('Token validation error:', error.message);
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

// Function to extract content from a component file
const extractComponentContent = (fileContent) => {
  try {
    console.log('Extracting component content...');
    
    // For Home component specially
    if (fileContent.includes('const Home = () =>') || 
        fileContent.includes('function Home()') || 
        fileContent.includes('export default function Home()')) {
      console.log('Extracting Home component content...');
      
      // First try to find the entire component structure
      const fullComponentRegex = /(const\s+Home\s*=\s*\(\s*\)\s*=>|function\s+Home\s*\(\s*\)|export\s+default\s+function\s+Home\s*\(\s*\))[\s\S]*?(\);|\})/;
      const fullComponentMatch = fullComponentRegex.exec(fileContent);
      
      if (fullComponentMatch) {
        const fullComponent = fullComponentMatch[0];
        console.log('Found full component declaration');
        
        // Try to extract just the JSX content inside the return statement
        const returnContentRegex = /return\s*\(\s*([\s\S]*?)\s*\);/;
        const returnMatch = returnContentRegex.exec(fullComponent);
        
        if (returnMatch && returnMatch[1]) {
          console.log('Found content using return pattern');
          return returnMatch[1].trim();
        }
        
        // Fallback to motion.div for older formats
        const motionDivRegex = /<motion\.div[^>]*>([\s\S]*?)<\/motion\.div>/;
        const motionDivMatch = motionDivRegex.exec(fullComponent);
        
        if (motionDivMatch && motionDivMatch[1]) {
          console.log('Found content using motion.div pattern');
          return motionDivMatch[1].trim();
        }
      }
      
      // If we're still here, try fallback patterns
      console.log('Trying fallback patterns for Home component');
      
      // Look for any JSX content
      const jsxBlockRegex = /<([A-Z][A-Za-z0-9]*|[a-z][A-Za-z0-9]*\.[a-z]+)[^>]*>[\s\S]*?<\/\1>/;
      const jsxMatch = jsxBlockRegex.exec(fileContent);
      
      if (jsxMatch) {
        console.log('Found content using JSX block pattern');
        return jsxMatch[0].trim();
      }
      
      console.log('Could not find content in Home component with specific patterns, returning default');
      return '<p>Edit this page content</p>';
    }
    
    // General content extraction for other components
    
    // Try finding a return statement first
    const returnRegex = /return\s*\(\s*([\s\S]*?)\s*\);/;
    const returnMatch = returnRegex.exec(fileContent);
    
    if (returnMatch && returnMatch[1]) {
      console.log('Found content using return pattern');
      return returnMatch[1].trim();
    }
    
    // Try finding content in a section tag
    const sectionRegex = /<section[^>]*>([\s\S]*?)<\/section>/;
    const sectionMatch = sectionRegex.exec(fileContent);
    
    if (sectionMatch && sectionMatch[1]) {
      console.log('Found content using section pattern');
      return sectionMatch[1].trim();
    }
    
    // Try finding content in any div with className
    const divRegex = /<div\s+className=["'`][^"'`]*["'`][^>]*>([\s\S]*?)<\/div>/;
    const divMatch = divRegex.exec(fileContent);
    
    if (divMatch && divMatch[1]) {
      console.log('Found content using div with className pattern');
      return divMatch[1].trim();
    }
    
    console.log('Could not find content');
    return '<p>Edit this page content</p>';
  } catch (error) {
    console.error('Error extracting component content:', error);
    return '<p>Error extracting content. Please try again.</p>';
  }
};

// Function to update component content in a file
const updateComponentContent = (fileContent, newContent) => {
  try {
    console.log('Updating component content...');
    console.log('New content length:', newContent.length);
    
    let updatedContent = fileContent;
    let wasUpdated = false;
    
    // For Home component
    if (fileContent.includes('const Home = () =>') || 
        fileContent.includes('function Home()') || 
        fileContent.includes('export default function Home()')) {
      console.log('Updating Home component content...');
      
      // Try motion.div replacement
      const motionDivRegex = /(<motion\.div[^>]*>)([\s\S]*?)(<\/motion\.div>)/;
      const motionDivMatch = motionDivRegex.exec(fileContent);
      
      if (motionDivMatch) {
        console.log('Updating content using motion.div pattern');
        updatedContent = fileContent.replace(motionDivRegex, `$1${newContent}$3`);
        wasUpdated = true;
      }
      
      // Try return statement replacement
      if (!wasUpdated) {
        const returnRegex = /(return\s*\(\s*)([\s\S]*?)(\s*\);)/;
        const returnMatch = returnRegex.exec(fileContent);
        
        if (returnMatch) {
          console.log('Updating content using return pattern');
          updatedContent = fileContent.replace(returnRegex, `$1${newContent}$3`);
          wasUpdated = true;
        }
      }
      
      if (!wasUpdated) {
        console.log('Could not find a pattern to update content in Home component');
        return fileContent; // Return original content if no patterns matched
      }
      
      return updatedContent;
    }
    
    // General updating for other components
    let updated = false;
    
    // Try return statement replacement first
    const returnRegex = /(return\s*\(\s*)([\s\S]*?)(\s*\);)/;
    const returnMatch = returnRegex.exec(fileContent);
    
    if (returnMatch) {
      console.log('Updating content using return pattern');
      updatedContent = fileContent.replace(returnRegex, `$1${newContent}$3`);
      updated = true;
    }
    
    // If not updated, try section replacement
    if (!updated) {
      const sectionRegex = /(<section[^>]*>)([\s\S]*?)(<\/section>)/;
      const sectionMatch = sectionRegex.exec(fileContent);
      
      if (sectionMatch) {
        console.log('Updating content using section pattern');
        updatedContent = fileContent.replace(sectionRegex, `$1${newContent}$3`);
        updated = true;
      }
    }
    
    // If not updated, try div with className replacement
    if (!updated) {
      const divRegex = /(<div\s+className=["'`][^"'`]*["'`][^>]*>)([\s\S]*?)(<\/div>)/;
      const divMatch = divRegex.exec(fileContent);
      
      if (divMatch) {
        console.log('Updating content using div with className pattern');
        updatedContent = fileContent.replace(divRegex, `$1${newContent}$3`);
        updated = true;
      }
    }
    
    if (!updated) {
      console.log('Could not find a pattern to update content');
      return fileContent; // Return original content if no patterns matched
    }
    
    return updatedContent;
  } catch (error) {
    console.error('Error updating component content:', error);
    return fileContent; // Return original content on exception
  }
};

// Main handler function for serverless deployment
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  // Handle OPTIONS request (preflight)
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  // Debug output
  console.log('API request received', {
    method: req.method,
    url: req.url,
    query: req.query,
    headers: req.headers,
  });
  
  // Validate authorization for POST requests
  if (req.method === 'POST') {
    const isAuthorized = validateToken(req.headers.authorization);
    if (!isAuthorized) {
      console.log('Unauthorized access attempt');
      return res.status(401).json({ error: 'Unauthorized' });
    }
  }
  
  try {
    // Initialize GitHub API client
    if (!GITHUB_TOKEN) {
      console.error('GITHUB_TOKEN is not set!');
      return res.status(500).json({ error: 'GitHub token not configured' });
    }
    
    const octokit = new Octokit({
      auth: GITHUB_TOKEN
    });
    
    // Extract the page path from query string
    // Fix: use "path" param which is what PageEditor.jsx sends
    const pagePath = req.query.path;
    
    if (!pagePath) {
      return res.status(400).json({ error: 'Path parameter is required' });
    }
    
    // Convert page path to file path
    const filePath = pagePathMap[pagePath];
    
    if (!filePath) {
      return res.status(404).json({ 
        error: 'Page not found in mapping',
        requestedPath: pagePath,
        availablePaths: Object.keys(pagePathMap)
      });
    }
    
    console.log(`Processing request for page: ${pagePath}, file path: ${filePath}`);
    
    // Handle GET request - retrieve content
    if (req.method === 'GET') {
      // Fetch the file content from GitHub
      const response = await octokit.repos.getContent({
        owner: GITHUB_OWNER,
        repo: GITHUB_REPO,
        path: filePath,
        ref: GITHUB_BRANCH
      });
      
      // Decode content from base64
      const fileContent = atob(response.data.content);
      console.log(`Retrieved file from GitHub, size: ${fileContent.length} bytes`);
      
      // Extract the component content
      const componentContent = extractComponentContent(fileContent);
      
      return res.status(200).json({ 
        content: componentContent,
        title: pagePath.split('/').pop().replace(/-/g, ' '),
        path: pagePath,
        filePath: filePath
      });
    }
    
    // Handle POST request - update content
    if (req.method === 'POST') {
      const { content, path } = req.body;
      
      if (!content) {
        return res.status(400).json({ error: 'Content is required' });
      }
      
      console.log('Received updated content with length:', content.length);
      
      // First, get the current file
      const fileResponse = await octokit.repos.getContent({
        owner: GITHUB_OWNER,
        repo: GITHUB_REPO,
        path: filePath,
        ref: GITHUB_BRANCH
      });
      
      const currentContent = atob(fileResponse.data.content);
      const sha = fileResponse.data.sha;
      
      // Update the content in the file
      const updatedFileContent = updateComponentContent(currentContent, content);
      
      if (updatedFileContent === currentContent) {
        console.warn('No changes detected in content');
        return res.status(304).json({ message: 'No changes detected' });
      }
      
      // Commit the updated file to GitHub
      await octokit.repos.createOrUpdateFileContents({
        owner: GITHUB_OWNER,
        repo: GITHUB_REPO,
        path: filePath,
        message: `Update content for ${pagePath} page via CMS`,
        content: Buffer.from(updatedFileContent).toString('base64'),
        sha: sha,
        branch: GITHUB_BRANCH
      });
      
      console.log(`Content for ${pagePath} page updated successfully`);
      return res.status(200).json({ message: 'Content updated successfully' });
    }
    
    // Handle unsupported methods
    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('Error processing request:', error);
    return res.status(500).json({ 
      error: 'An error occurred processing your request',
      message: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
} 