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
  return btoa(JSON.stringify(userData));
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

  if (req.method === 'POST') {
    const { username, password } = req.body;

    // Find user
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Generate token
    const token = generateToken(user);

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

  return res.status(405).json({ message: 'Method not allowed' });
} 