import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
const port = process.env.PORT || 3000;

import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);


mongoose.connect("mongodb://0.0.0.0:27017/vacation")
  .then(() => {
    app.listen(port, () => {
      console.log(`Connected to port ${port}`)
    })
  })
  .catch((e) => {
    console.log(e.message);
  })

// const CONNECTION_URL = 'mongodb+srv://Rishabh123:Rishabh123@cluster0.wi2mbif.mongodb.net/?retryWrites=true&w=majority';
// const PORT = process.env.PORT || 5000;

// mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
//   .catch((error) => console.log(`${error} did not connect`));

// // mongoose.set('useFindAndModify', false);

// //Rishabh11
// //mCR8XNfmE5t4jopM