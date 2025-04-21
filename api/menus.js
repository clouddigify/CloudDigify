// This would be deployed as a serverless function on Vercel

// In production, use a database
let menuItems = [
  {
    id: 1,
    title: 'Home',
    url: '/',
    order: 1
  },
  {
    id: 2,
    title: 'Services',
    url: '/services',
    order: 2
  },
  {
    id: 3,
    title: 'About',
    url: '/about',
    order: 3
  },
  {
    id: 4,
    title: 'Contact',
    url: '/contact',
    order: 4
  }
];

// Helper to validate token (in production, use proper JWT verification)
const validateToken = (authHeader) => {
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return false;
  }
  
  const token = authHeader.split(' ')[1];
  // In production, use jwt.verify()
  try {
    const decoded = JSON.parse(atob(token));
    return decoded.role === 'admin';
  } catch (error) {
    return false;
  }
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

  // GET - Fetch menu items (public)
  if (req.method === 'GET') {
    return res.status(200).json(menuItems);
  }

  // POST - Create menu item (protected)
  if (req.method === 'POST') {
    // Validate auth token
    if (!validateToken(req.headers.authorization)) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const { title, url, order } = req.body;
    
    if (!title || !url) {
      return res.status(400).json({ message: 'Title and URL are required' });
    }

    const newMenuItem = {
      id: menuItems.length > 0 ? Math.max(...menuItems.map(item => item.id)) + 1 : 1,
      title,
      url,
      order: order || menuItems.length + 1
    };

    menuItems.push(newMenuItem);
    
    return res.status(201).json(newMenuItem);
  }

  // DELETE - Delete menu item (protected)
  if (req.method === 'DELETE') {
    // Validate auth token
    if (!validateToken(req.headers.authorization)) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const id = parseInt(req.url.split('/').pop());
    
    if (!id) {
      return res.status(400).json({ message: 'ID is required' });
    }

    const initialLength = menuItems.length;
    menuItems = menuItems.filter(item => item.id !== id);
    
    if (menuItems.length === initialLength) {
      return res.status(404).json({ message: 'Menu item not found' });
    }
    
    return res.status(200).json({ message: 'Menu item deleted successfully' });
  }

  return res.status(405).json({ message: 'Method not allowed' });
} 