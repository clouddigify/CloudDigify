// login.js - Authentication API for CloudDigify
const fs = require('fs');
const path = require('path');

// This would be replaced with a proper database in production
const USERS_FILE = path.join(process.cwd(), 'data', 'users.json');
const TOKEN_SECRET = process.env.TOKEN_SECRET || 'clouddigify-secret-key';

function generateToken(user) {
  // Create a proper JWT-like payload with expiration (24 hours from now)
  const now = Math.floor(Date.now() / 1000);
  const payload = {
    username: user.username,
    role: user.role,
    iat: now,
    exp: now + (24 * 60 * 60) // 24 hours
  };
  
  // In production, use a proper JWT library
  // For now, we'll use a simple Base64 encoding
  const tokenString = JSON.stringify(payload);
  // Use Buffer in Node.js instead of btoa
  const token = Buffer.from(tokenString).toString('base64');
  return token;
}

function loadUsers() {
  try {
    if (!fs.existsSync(USERS_FILE)) {
      // Create default admin user if no users file exists
      const defaultUsers = [
        {
          username: 'admin',
          // In production, use proper password hashing
          password: 'admin123',
          role: 'admin'
        }
      ];
      
      // Ensure directory exists
      const dir = path.dirname(USERS_FILE);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      
      fs.writeFileSync(USERS_FILE, JSON.stringify(defaultUsers, null, 2));
      return defaultUsers;
    }
    
    const data = fs.readFileSync(USERS_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error loading users:', error);
    // Return default admin if there's an error
    return [
      {
        username: 'admin',
        password: 'admin123',
        role: 'admin'
      }
    ];
  }
}

module.exports = (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  // Only allow POST for login
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }
  
  const { username, password } = req.body;
  
  if (!username || !password) {
    res.status(400).json({ error: 'Username and password are required' });
    return;
  }
  
  const users = loadUsers();
  const user = users.find(
    u => u.username === username && u.password === password
  );
  
  if (!user) {
    res.status(401).json({ error: 'Invalid credentials' });
    return;
  }
  
  // Generate token
  const token = generateToken(user);
  
  // Return user info (excluding password) and token
  const { password: _, ...userInfo } = user;
  
  res.status(200).json({
    message: 'Login successful',
    user: userInfo,
    token
  });
}; 