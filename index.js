import express from "express";
import Mongoose from 'mongoose';
import ArticleController from "./controllers/ArticleController.js";
import dotenv from "dotenv";

const env = dotenv.config();
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//setting endpoint yang dapat di akses user
app.post('/api/articles', ArticleController.store);

//koneksi ke MongoDB server
Mongoose.connect(process.env.DB_URL, {        
  useNewUrlParser     : true, 
  useUnifiedTopology  : true,
  autoIndex: true
});
const db = Mongoose.connection;
db.on('error', (err) => { console.error(err) });
db.once('open', () => { console.log('MongoDB connected') });

//listen port
app.listen(process.env.APP_PORT, function () {
  console.log(`Server listening on port ${process.env.APP_PORT}`);
});