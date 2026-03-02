import express from 'express';
import cors from "cors";

import subjectsRouter from "./routes/subjects";

const app = express();
const port = 8000;


app.use(cors({
  origin: process.env.FRONTEND_URL,
  methods: ['GET', 'POST', 'PUT',  'DELETE'],
  credentials: true
}))

// Use json middleware
app.use(express.json());

app.use('/api/subjects', subjectsRouter)

// Root GET route
app.get('/', (req, res) => {
  res.send( 'Welcome to the Classroom API!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
