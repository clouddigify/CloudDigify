// A simple API endpoint that returns a message and also checks GitHub token status
module.exports = (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Check environment variables
  const envCheck = {
    GITHUB_OWNER: process.env.GITHUB_OWNER ? "Set ✓" : "Missing ✗",
    GITHUB_TOKEN: process.env.GITHUB_TOKEN ? "Set ✓" : "Missing ✗",
    NODE_ENV: process.env.NODE_ENV || "Not set",
    VERCEL_ENV: process.env.VERCEL_ENV || "Not set"
  };

  // Create diagnosis info
  const diagInfo = {
    message: "API is working!",
    method: req.method,
    url: req.url,
    timestamp: new Date().toISOString(),
    environment: envCheck,
    query: req.query
  };

  res.status(200).json(diagInfo);
}; 