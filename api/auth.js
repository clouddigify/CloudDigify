// This would be deployed as a serverless function on Vercel

// Mock user data - in production, use a database
const users = [
  {
    id: 1,
    username: 'admin',
    // In production, NEVER store passwords in plain text, use bcrypt or similar
    // This is only for demonstration
    password: 'adminpassword123',
    email: 'admin@clouddigify.com',
    role: 'admin'
  }
];

// Mock token generation - in production, use JWT with proper secret
const generateToken = (user) => {
  // Remove sensitive data like password
  const { password, ...userData } = user;
  
  // In production, use jwt.sign() with proper expiration
  const userJson = JSON.stringify(userData);
  console.log('Generating token for user:', userData.username);
  return Buffer.from(userJson).toString('base64');
};

export default function handler(req, res) {
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

  // Check the URL path to determine the operation
  const { url } = req;
  console.log('Auth API called:', url, 'Method:', req.method);
  
  // Handle login request
  if (url.includes('/login') && req.method === 'POST') {
    const { username, password } = req.body;
    console.log('Login attempt for username:', username);

    // Find user
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (!user) {
      console.log('Login failed: Invalid credentials for', username);
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Generate token
    const token = generateToken(user);
    console.log('Login successful for:', username);

    // Return user info and token
    return res.status(200).json({
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role
      }
    });
  }

  // Simple test endpoint
  if (url.includes('/test')) {
    console.log('Auth test endpoint called');
    return res.status(200).json({ 
      message: 'Auth API is working correctly!',
      environment: {
        GITHUB_TOKEN: process.env.GITHUB_TOKEN ? "Set" : "Not set",
        GITHUB_OWNER: process.env.GITHUB_OWNER ? "Set" : "Not set"
      }
    });
  }

  console.log('Auth API endpoint not found:', url);
  return res.status(404).json({ message: 'API endpoint not found' });
} 