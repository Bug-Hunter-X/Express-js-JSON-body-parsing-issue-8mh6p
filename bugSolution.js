const express = require('express');
const app = express();
app.use(express.json()); // Ensure express.json() is placed before the route
app.post('/data', (req, res) => {
  console.log(req.body); // req.body will now contain the JSON data
  res.send('OK');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});