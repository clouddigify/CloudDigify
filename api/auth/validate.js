// Simple token validation endpoint for admin authentication

export default function handler(req, res) {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Get authorization header
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Authentication required' });
  }

  const token = authHeader.split(' ')[1];
  
  try {
    // Decode token
    const decoded = JSON.parse(Buffer.from(token, 'base64').toString());
    
    // Validate token contents
    if (!decoded || !decoded.id || !decoded.role) {
      throw new Error('Invalid token format');
    }
    
    // Check if role is admin
    if (decoded.role !== 'admin') {
      return res.status(403).json({ message: 'Insufficient permissions' });
    }
    
    // Token is valid
    return res.status(200).json({ 
      valid: true, 
      user: {
        id: decoded.id,
        username: decoded.username,
        role: decoded.role
      }
    });
  } catch (error) {
    console.error('Token validation error:', error);
    return res.status(401).json({ message: 'Invalid authentication token' });
  }
} 