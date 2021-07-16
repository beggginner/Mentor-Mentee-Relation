const express = require('express');
const app = express();
const knex = require("knex");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt-nodejs");
const cors = require("cors");
require("dotenv/config");

const signin = require('./controllers/signin');
const registerMentee = require('./controllers/registermentee');
const registerMentor = require('./controllers/registermentor');
const findMentor = require('./controllers/findmentor');

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : process.env.DB_USERNAME,
    password : process.env.DB_PASSWORD,
    database : 'claylabusers'
  }
});
app.use(express.json())
app.use(cors());

app.get("/",(req,res)=>{
  res.json("hello");
})

app.post("/registermentee",(req,res) => {registerMentee.handleRegisterMentee(req,res,db,bcrypt)});
app.post("/registermentor",(req,res)=>{registerMentor.handleRegisterMentor(req,res,db,bcrypt)});
app.post("/signin",(req,res)=>{signin.handleSignin(req,res,db,bcrypt)});
app.post("/findmentor",(req,res)=>{findMentor.handleFind(req,res,db)});

app.listen(3001);