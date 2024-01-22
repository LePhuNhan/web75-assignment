import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js';
import postRoutes from './routes/postRoutes.js';
import schoolRoutes from './routes/schoolRoutes.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://lephunhan2401:nhannhan2401@bakery.na9nuqc.mongodb.net/?retryWrites=true&w=majority');


// Middleware
app.use(express.json());

// Routes
app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/schools', schoolRoutes);

app.use(errorHandler);

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
