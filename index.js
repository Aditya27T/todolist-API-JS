const express = require("express");
const app = express();
const config = require("./config/global_config");
const port = config.port;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
