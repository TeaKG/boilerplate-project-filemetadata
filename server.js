"use strict";

var express = require("express");
var cors = require("cors");

// require and use "multer"...
const multer = require("multer");
const upload = multer();

var app = express();

app.use(express.json());
app.use(cors());
app.use("/public", express.static(process.cwd() + "/public"));
app.use;

app.post("/api/fileanalyse", upload.single("upfile"), (req, res) => {
    // Handle file upload
    // Grab name and type from the file
    const { originalname, mimetype, size } = req.file;

    res.json({
        name: originalname,
        type: mimetype,
        size
    });
});

app.get("/", function (req, res) {
    res.sendFile(process.cwd() + "/views/index.html");
});

app.get("/hello", function (req, res) {
    res.json({ greetings: "Hello, API" });
});

app.listen(process.env.PORT || 3000, function () {
    console.log("Node.js listening ...");
});
