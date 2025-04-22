// This would be deployed as a serverless function on Vercel
import { Octokit } from '@octokit/rest';

// GitHub repository details
const GITHUB_REPO = 'CloudDigify';
const GITHUB_OWNER = process.env.GITHUB_OWNER || 'chiragmalhotra98';
const GITHUB_BRANCH = 'main';

// In production, move this to environment variables
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

// Improved logging
const logInfo = (message, data = {}) => {
  console.log(`[${new Date().toISOString()}] [INFO] ${message}`, data);
};

const logError = (message, error = null) => {
  console.error(`[${new Date().toISOString()}] [ERROR] ${message}`);
  if (error) {
    console.error('Error details:', error.message);
    console.error('Stack trace:', error.stack);
  }
};

// Helper to validate token (in production, use proper JWT verification)
const validateToken = (authHeader) => {
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    logError('Invalid auth header format', { header: authHeader ? 'Present (but invalid)' : 'Missing' });
    return false;
  }
  
  const token = authHeader.split(' ')[1];
  // Simple base64 decode
  try {
    logInfo('Attempting to validate token');
    const decoded = JSON.parse(Buffer.from(token, 'base64').toString());
    const isValid = decoded && decoded.role === 'admin';
    logInfo(`Token validation ${isValid ? 'successful' : 'failed'}`);
    return isValid;
  } catch (error) {
    logError('Token validation error', error);
    return false;
  }
};

// Check GitHub token and setup Octokit
const setupGitHub = () => {
  if (!GITHUB_TOKEN) {
    logError('GITHUB_TOKEN environment variable is not set');
    throw new Error('GitHub token is not configured');
  }
  
  try {
    // Test token by creating Octokit instance
    return new Octokit({ auth: GITHUB_TOKEN });
  } catch (error) {
    logError('Failed to initialize GitHub API client', error);
    throw new Error('GitHub API initialization failed');
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
  // Handle CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');

  // Add request ID for tracking
  const requestId = Date.now().toString(36) + Math.random().toString(36).substr(2);
  logInfo(`API Request [${requestId}]: ${req.method} ${req.url}`);

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Special case for a test route that doesn't require authentication
  if (req.url.includes('/test')) {
    return res.status(200).json({ 
      message: 'API is working',
      timestamp: new Date().toISOString(),
      github: {
        tokenConfigured: !!GITHUB_TOKEN,
        owner: GITHUB_OWNER,
        repo: GITHUB_REPO
      }
    });
  }

  // Validate auth token
  const authHeader = req.headers.authorization;
  logInfo(`Auth header present: ${!!authHeader}`);
  
  if (!validateToken(authHeader)) {
    logError('Authentication failed - invalid or missing token');
    
    // More informative error response
    return res.status(401).json({ 
      message: 'Unauthorized - Invalid or missing authentication token',
      detail: 'Please ensure you are logged in and your session is still valid',
      help: 'Try logging out and back in if the problem persists' 
    });
  }

  try {
    // Setup GitHub API client - improved error handling
    let octokit;
    try {
      octokit = setupGitHub();
    } catch (error) {
      return res.status(500).json({ 
        message: 'Server configuration error (GitHub access)', 
        detail: error.message,
        requestId
      });
    }
    
    // GET - Load page content
    if (req.method === 'GET') {
      const { path } = req.query;
      
      if (!path) {
        return res.status(400).json({ message: 'Missing required parameter: path' });
      }
      
      console.log(`Loading content for path: ${path}`);
      
      // Map the page path to a file path in the repo
      const filePath = pagePathMap[path];
      
      if (!filePath) {
        console.error(`No file mapping found for path: ${path}`);
        return res.status(404).json({ message: `Page not found: ${path}` });
      }
      
      try {
        // Fetch file content from GitHub
        const { data } = await octokit.repos.getContent({
          owner: GITHUB_OWNER,
          repo: GITHUB_REPO,
          path: filePath,
          ref: GITHUB_BRANCH
        });
        
        if (!data.content) {
          throw new Error('No content received from GitHub');
        }
        
        const fileContent = Buffer.from(data.content, 'base64').toString();
        const extractedContent = extractComponentContent(fileContent);
        
        console.log(`Successfully loaded content for ${path}, length: ${extractedContent.length}`);
        return res.status(200).json({ 
          content: extractedContent,
          path: path,
          title: path.split('/').pop() || 'Home'
        });
      } catch (error) {
        console.error(`Error fetching content from GitHub: ${error.message}`);
        return res.status(500).json({ message: `Failed to load content: ${error.message}` });
      }
    } 
    // POST - Save page content
    else if (req.method === 'POST') {
      logInfo(`[${requestId}] Processing content save request`);
      const { path, content, title, commitMessage } = req.body;
      
      logInfo(`[${requestId}] Attempting to save content:`, {
        path,
        title,
        contentLength: content?.length || 0,
        commitMessage
      });
      
      if (!path || !content) {
        logError(`[${requestId}] Missing required parameters`);
        return res.status(400).json({ message: 'Missing required parameters: path and content are required' });
      }
      
      // Map the page path to a file path in the repo
      const filePath = pagePathMap[path];
      
      if (!filePath) {
        logError(`[${requestId}] No file mapping found for path: ${path}`);
        return res.status(404).json({ 
          message: `Page not found: ${path}`,
          availablePaths: Object.keys(pagePathMap).join(', ')
        });
      }
      
      // Add mock mode for testing without GitHub
      if (process.env.MOCK_GITHUB === 'true') {
        logInfo(`[${requestId}] Running in MOCK mode - GitHub operations simulated`);
        return res.status(200).json({ 
          message: 'Content saved successfully (MOCK MODE)',
          path: path,
          mock: true
        });
      }
      
      try {
        // First get the file to check if it exists and get its SHA
        let fileSha;
        let currentFileContent;
        
        try {
          const { data } = await octokit.repos.getContent({
            owner: GITHUB_OWNER,
            repo: GITHUB_REPO,
            path: filePath,
            ref: GITHUB_BRANCH
          });
          
          fileSha = data.sha;
          currentFileContent = Buffer.from(data.content, 'base64').toString();
          logInfo(`[${requestId}] Existing file found with SHA: ${fileSha}`);
        } catch (error) {
          if (error.status === 404) {
            logInfo(`[${requestId}] File doesn't exist yet, will create: ${filePath}`);
          } else {
            throw error;
          }
        }
        
        // Update the content in the file
        let updatedContent;
        if (currentFileContent) {
          updatedContent = updateComponentContent(currentFileContent, content);
          
          // Extra validation to check if content was properly updated
          if (updatedContent === currentFileContent) {
            logError(`[${requestId}] Update pattern failed - content unchanged`);
            return res.status(400).json({ 
              message: 'Failed to update content - no matching patterns found',
              help: 'The component structure may not match expected patterns'
            });
          }
        } else {
          // This is a new file - create minimal component with the content
          updatedContent = `import React from 'react';\n\nexport default function ${title || 'Page'}() {\n  return (\n    ${content}\n  );\n}\n`;
          logInfo(`[${requestId}] Created new component file content`);
        }
        
        // Commit the changes to GitHub
        const commitParams = {
          owner: GITHUB_OWNER,
          repo: GITHUB_REPO,
          path: filePath,
          message: commitMessage || `Update ${title || path} content`,
          content: Buffer.from(updatedContent).toString('base64'),
          branch: GITHUB_BRANCH
        };
        
        // Add SHA if updating existing file
        if (fileSha) {
          commitParams.sha = fileSha;
        }
        
        logInfo(`[${requestId}] Committing changes to GitHub: ${filePath}`);
        const result = await octokit.repos.createOrUpdateFileContents(commitParams);
        
        logInfo(`[${requestId}] Successfully saved content for ${path}`);
        logInfo(`[${requestId}] GitHub commit: ${result.data.commit.html_url}`);
        
        return res.status(200).json({ 
          message: 'Content saved successfully',
          path: path,
          commit: result.data.commit.html_url,
          requestId
        });
      } catch (error) {
        logError(`[${requestId}] Error saving content to GitHub`, error);
        
        // Return specific error based on GitHub API response
        let errorMessage = `Failed to save content: ${error.message}`;
        let statusCode = 500;
        
        if (error.status === 401 || error.status === 403) {
          statusCode = 403;
          errorMessage = 'GitHub authorization failed. The token lacks permission to write to this repository.';
        } else if (error.status === 404) {
          statusCode = 404;
          errorMessage = 'Repository or file path not found on GitHub.';
        } else if (error.status === 422) {
          statusCode = 422;
          errorMessage = 'Validation error when writing to GitHub. This may indicate a conflict.';
        }
        
        return res.status(statusCode).json({ 
          message: errorMessage,
          detail: error.message,
          requestId 
        });
      }
    } else {
      return res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error) {
    logError(`Unexpected error in content API`, error);
    return res.status(500).json({ 
      message: `Server error: ${error.message}`,
      requestId 
    });
  }
} 