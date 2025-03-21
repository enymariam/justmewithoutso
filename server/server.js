const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const DATA_PATH = path.join(__dirname, "data", "data.json");
app.get("/data", (req, res) => {
    fs.readFile(DATA_PATH, "utf8", (err, data) => {
        if (err) return res.status(500).send("Error reading data");
        res.json(JSON.parse(data));
    });
});

if (require.main === module) {
    app.listen(PORT, () =>
        console.log(`Server running on http://localhost:${PORT}`)
    );
}

module.exports = app;
