// Imports
const express = require('express');
const cors = require('cors');

// Get environment
require('dotenv').config();

// Create express web app, specify port
const app = express();
const port = process.env.PORT || 5000;

// Necessary specifications for functioning
app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    app.use(express.static('frontend/build'));
    app.get('/*', (req, res) => {
      res.sendFile(path.join(__dirname + '/frontend/build/index.html'));
    });
  }

const repoRouter = require('./routes/repositories');
app.use('/api/repos', repoRouter)

// Start app
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
