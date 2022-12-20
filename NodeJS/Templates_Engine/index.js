const express = require('express');
const fs = require('fs');
const path = require("path");
const app = express();

let users = [
    {
        id: 3,
        name: "Igor",
        phone: "(111)1233445",
    },

    {
        id: 5,    
        name: "José",
        phone: "(565)624167",
    },

    {
        id: 6,        
        name: "Marcos",
        phone: "(242)234141",
    }];


app.set("views", path.join(__dirname, 'views'))
app.set("view engine", "ejs");

app.get("/", (req, res)=> {
    res.render("user" , {users})
})

app.get("/about", (req, res)=> {
    res.render("about")
})


app.listen(3000, () => {
    console.log("Server running on port 3000");
})