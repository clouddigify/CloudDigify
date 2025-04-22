// API endpoint for image management
const { Octokit } = require('@octokit/rest');

// In production, use a database to store image metadata
let siteImages = [
  {
    id: 1,
    name: 'logo.png',
    path: 'public/images/logo.png',
    url: '/images/logo.png',
    description: 'Company Logo'
  },
  {
    id: 2,
    name: 'hero-banner.jpg',
    path: 'public/images/hero-banner.jpg',
    url: '/images/hero-banner.jpg',
    description: 'Homepage Hero Banner'
  }
];

// Helper function to validate token (in production, use proper JWT verification)
const validateToken = (authHeader) => {
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return false;
  }
  
  const token = authHeader.split(' ')[1];
  // In production, use jwt.verify()
  try {
    // Simple base64 decode
    const decoded = JSON.parse(Buffer.from(token, 'base64').toString());
    return decoded.role === 'admin';
  } catch (error) {
    return false;
  }
};

// Helper function to upload image to GitHub
const uploadImageToGitHub = async (imageData, fileName, token) => {
  try {
    if (!process.env.GITHUB_TOKEN) {
      throw new Error('GitHub token not configured');
    }
    
    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN
    });

    // Remove data:image/png;base64, part
    const base64Data = imageData.split(',')[1];
    
    // Create or update file in GitHub
    const response = await octokit.repos.createOrUpdateFileContents({
      owner: process.env.GITHUB_OWNER || 'clouddigify',
      repo: process.env.GITHUB_REPO || 'CloudDigify',
      path: `public/images/${fileName}`,
      message: `Upload image: ${fileName}`,
      content: base64Data,
      committer: {
        name: 'CloudDigify Admin',
        email: 'admin@clouddigify.com'
      }
    });
    
    return {
      success: true,
      sha: response.data.content.sha,
      url: `/images/${fileName}`
    };
  } catch (error) {
    console.error('Error uploading image to GitHub:', error);
    throw new Error(`Failed to upload image: ${error.message}`);
  }
};

// Delete image from GitHub
const deleteImageFromGitHub = async (filePath, token) => {
  try {
    if (!process.env.GITHUB_TOKEN) {
      throw new Error('GitHub token not configured');
    }
    
    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN
    });
    
    // First, get the file SHA
    const fileInfo = await octokit.repos.getContent({
      owner: process.env.GITHUB_OWNER || 'clouddigify',
      repo: process.env.GITHUB_REPO || 'CloudDigify',
      path: filePath
    });
    
    // Delete the file
    await octokit.repos.deleteFile({
      owner: process.env.GITHUB_OWNER || 'clouddigify',
      repo: process.env.GITHUB_REPO || 'CloudDigify',
      path: filePath,
      message: `Delete image: ${filePath}`,
      sha: fileInfo.data.sha,
      committer: {
        name: 'CloudDigify Admin',
        email: 'admin@clouddigify.com'
      }
    });
    
    return { success: true };
  } catch (error) {
    console.error('Error deleting image from GitHub:', error);
    throw new Error(`Failed to delete image: ${error.message}`);
  }
};

// Main handler
module.exports = async (req, res) => {
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

  // GET - Fetch all images (public endpoint)
  if (req.method === 'GET') {
    return res.status(200).json(siteImages);
  }

  // POST - Upload a new image (protected)
  if (req.method === 'POST') {
    // Validate auth token
    if (!validateToken(req.headers.authorization)) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
      const { imageData, fileName, description } = req.body;
      
      if (!imageData || !fileName) {
        return res.status(400).json({ message: 'Image data and file name are required' });
      }

      // Upload to GitHub
      const uploadResult = await uploadImageToGitHub(imageData, fileName, req.headers.authorization);
      
      // Save metadata
      const newImage = {
        id: siteImages.length > 0 ? Math.max(...siteImages.map(img => img.id)) + 1 : 1,
        name: fileName,
        path: `public/images/${fileName}`,
        url: uploadResult.url,
        description: description || '',
        sha: uploadResult.sha
      };
      
      siteImages.push(newImage);
      
      return res.status(201).json(newImage);
    } catch (error) {
      console.error('Error uploading image:', error);
      return res.status(500).json({ message: error.message || 'Failed to upload image' });
    }
  }

  // DELETE - Delete an image (protected)
  if (req.method === 'DELETE') {
    // Validate auth token
    if (!validateToken(req.headers.authorization)) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
      const id = parseInt(req.url.split('/').pop());
      
      if (!id) {
        return res.status(400).json({ message: 'Image ID is required' });
      }

      const imageToDelete = siteImages.find(img => img.id === id);
      
      if (!imageToDelete) {
        return res.status(404).json({ message: 'Image not found' });
      }

      // Delete from GitHub
      await deleteImageFromGitHub(imageToDelete.path, req.headers.authorization);
      
      // Remove from local metadata
      siteImages = siteImages.filter(img => img.id !== id);
      
      return res.status(200).json({ message: 'Image deleted successfully' });
    } catch (error) {
      console.error('Error deleting image:', error);
      return res.status(500).json({ message: error.message || 'Failed to delete image' });
    }
  }

  return res.status(405).json({ message: 'Method not allowed' });
}; 