// Most minimal API endpoint possible
module.exports = (req, res) => {
  res.json({ 
    message: 'API working',
    method: req.method,
    url: req.url
  });
}; 