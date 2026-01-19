const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS so React can call backend
app.use(cors());

// Read secret from environment variable (injected by OpenShift)
const API_KEY = process.env.MY_API_KEY || 'No Secret Found';

app.get('/hello', (req, res) => {
  res.json({ message: `Hello World from backend! Your API key is ${API_KEY}` });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
