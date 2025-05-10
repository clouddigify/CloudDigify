// Simple endpoint to test GitHub API connectivity
const { Octokit } = require('@octokit/rest');

module.exports = async (req, res) => {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
    const GITHUB_OWNER = process.env.GITHUB_OWNER || 'chiragmalhotra98';
    const GITHUB_REPO = 'CloudDigify';

    // Test 1: Check if token exists
    const tokenExists = !!GITHUB_TOKEN;
    
    let repoAccessible = false;
    let writePermission = false;
    let tokenScopes = [];
    let octokit = null;
    
    if (tokenExists) {
      // Test 2: Initialize Octokit with token
      try {
        octokit = new Octokit({ auth: GITHUB_TOKEN });
        
        // Test 3: Check token metadata and permissions
        const tokenInfo = await octokit.rest.users.getAuthenticated();
        
        // Test 4: Validate repo access
        const repoInfo = await octokit.rest.repos.get({
          owner: GITHUB_OWNER,
          repo: GITHUB_REPO
        });
        
        repoAccessible = true;
        
        // Test 5: Check if token has push permission
        const permissionInfo = repoInfo.data.permissions;
        writePermission = permissionInfo && (permissionInfo.push || permissionInfo.admin);
        
        // Get token scopes from response headers if available
        if (tokenInfo.headers && tokenInfo.headers['x-oauth-scopes']) {
          tokenScopes = tokenInfo.headers['x-oauth-scopes'].split(', ');
        }
      } catch (error) {
        console.error('GitHub API test error:', error);
      }
    }
    
    // Return diagnostics
    return res.status(200).json({
      timestamp: new Date().toISOString(),
      diagnostics: {
        tokenExists,
        repoAccessible,
        writePermission,
        tokenScopes,
        githubOwner: GITHUB_OWNER,
        githubRepo: GITHUB_REPO,
        environment: process.env.NODE_ENV || 'unknown'
      },
      message: tokenExists 
        ? (writePermission 
          ? 'GitHub token seems properly configured with write access'
          : 'GitHub token exists but lacks necessary permissions')
        : 'GitHub token is not set in environment variables'
    });
  } catch (error) {
    console.error('Diagnostic endpoint error:', error);
    return res.status(500).json({ 
      message: 'Failed to run GitHub token diagnostics',
      error: error.message
    });
  }
}; 