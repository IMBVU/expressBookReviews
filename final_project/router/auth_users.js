const express = require('express');
const jwt = require('jsonwebtoken');
let books = require("./booksdb.js");
const regd_users = express.Router();

let users = [
  {
    "username": "bvu7",
    "password": "12345"
    
  }
];

const jwtSecret = '244d0b97c61cb978567e348a15fc8cd5c3c5791af982ccae88db48383bc3c273';

const isValid = (username)=>{ //returns boolean
    return true 
}

const authenticatedUser = (username,password)=>{ //returns boolean
    return true
}

//only registered users can login
regd_users.post("/login", (req,res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Add a book review
regd_users.put("/auth/review/:isbn", (req, res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;
