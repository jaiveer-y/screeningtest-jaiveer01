const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require('mysql2');


app.use(express.json());
const dbpassword = 'jaiveer';

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: dbpassword,
database: "screaningtest",
});

app.use(    
 cors({
 origin: ["http://localhost:3000"],
 methods: ["GET", "POST"],
 credentials: true,
 })
);

app.post("/register", (req, res) => {
      const email = req.body.email;
      const password = req.body.password;
   db.execute(
     "INSERT INTO users (email, password) VALUES (?,?)",
     [email, password],
     (err, result)=> {
     console.log(err);
     }
     );
     console.log(email)
     console.log(password)
});

app.post('/login', (req, res) => {
 const email = req.body.email;
 const password = req.body.password;
 
 db.execute(
     "SELECT * FROM users WHERE email = ? AND password = ?",
     [email, password],
     (err, result)=> {
         if (err) {
             res.send({err: err});
         }
 
         else if (result.length > 0) {
             res.send( result);
             }else({message: "Wrong email/password comination!"});
         }
     );
       console.log(email);
       console.log(password);
});
app.listen(3500, () => {
   console.log("Server is running");
});