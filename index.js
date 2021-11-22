import express from "express";
import Mongoose from 'mongoose';
import ArticleController from "./controllers/ArticleController.js";

const APP_PORT  = 8080
const app       = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//setting endpoint yang dapat di akses user
app.post('/api/articles', ArticleController.store);

//koneksi ke MongoDB server
Mongoose.connect('mongodb+srv://wegodev:e94ry437r3he32re@wegodev.7x0xp.mongodb.net/belajar?retryWrites=true&w=majority', {        
  useNewUrlParser     : true, 
  useUnifiedTopology  : true,
  autoIndex: true
});
const db = Mongoose.connection;
db.on('error', (err) => { console.error(err) });
db.once('open', () => { console.log('MongoDB connected') });

//listen port
app.listen(APP_PORT, function () {
  console.log(`Server listening on port ${APP_PORT}`);
});