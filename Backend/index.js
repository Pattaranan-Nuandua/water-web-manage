const mysql = require('mysql')
const express = require('express')
const cors = require('cors')
const bodyParser = require('boby-parser')
const app = express()
const part = 5000


const DB = mysql.createConnection({
    host: 'localhost'
    user 'root'
    password: '123456
    database:'Menu'
});

DB.connect(function(err)){
    if (err)
}