import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import route from './routes';

const app = express();
const server = require('http').Server(app);

const io = require('socket.io')(server);

/* Conexão com o Mongo */
mongoose.connect('mongodb://localhost:27017/postvotos', {
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
});

/* Socket Io */
app.use((req, res, next) => {
  req.io = io;
  return next();
});

app.use(cors());
app.use(express.json());
app.use(route);

server.listen(3000, () => {
  console.log('server run port:3000 ;)');
});
