const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const PORT = 5000;

app.use(express.json());

const DATA_PATH = path.join(__dirname, "data", "data.json");
app.get("/data", (req, res) => {
    fs.readFile(DATA_PATH, "utf8", (err, data) => {
        if (err) return res.status(500).send("Error reading data");
        res.json(JSON.parse(data));
    });
});

app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`)
);
