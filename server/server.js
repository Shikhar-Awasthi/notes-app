const express = require('express');
const mysql = require('mysql');
require('dotenv').config();
const app = express();

const con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    charset: "utf8mb4",
    port: 3306,
});
con.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }
});

app.use(express.json({limit: "1mb"}));

app.get("/notes", (req, res) => {
    try {
        let sql = "SELECT NoteId id, Text text, DATE_FORMAT(Date, '%d %b, %Y') date FROM Notes;";
        con.query(sql, (err, result, _) => {
            if(err) return res.sendStatus(500);
            res.send(result)
        })
    } catch (error) {
        
    }
});

app.post("/notes", (req, res) => {
    try {
        let sql = "INSERT INTO Notes(Text, Date) VALUES(?, CURRENT_TIMESTAMP())";
        con.query(sql, [req.body.text], (err) => {
            if(err) return res.sendStatus(400);
            res.sendStatus(201);
        });
    } catch (error) {
        
    }
});

app.delete("/notes/:id", (req, res) => {
    try {
        let sql = "DELETE FROM Notes WHERE NoteId=?";
        con.query(sql, [req.params.id], (err) => {
            if(err) return res.sendStatus(400);
            res.sendStatus(200);
        });
    } catch (error) {
        
    }
});

app.patch("/notes/:id", (req, res) => {
    try {
        const {text} = req.body, {id} = req.params;
        let sql = "UPDATE notes SET Text=? WHERE NoteId=?";
        con.query(sql, [text, id], (err) => {
            if(err) return res.send(err);
            res.sendStatus(200);
        })
    } catch (error) {
        
    }
});


app.get("/", (_, res) =>  res.send("Hello, World"));






app.listen(process.env.PORT, () => console.log(`🚀 https://localhost:${process.env.PORT}`));









