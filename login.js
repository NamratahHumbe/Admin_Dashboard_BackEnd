const express = require('express');
const router = express.Router();
const users = [
    { id: 1, username: 'namrata', password: 'namu' },
    { id: 1, username: 'pallavi', password: 'pass' },
  ];
  
  router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find((user) => user.username === username && user.password === password);
  
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
  
    res.json({ user: { id: user.id, username: user.username } });
  });

module.exports = router;