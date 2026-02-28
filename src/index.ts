import express from 'express';

const app = express();
const port = 8000;

// Use json middleware
app.use(express.json());

// Root GET route
app.get('/', (req, res) => {
  res.send( 'Welcome to the Classroom API!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
