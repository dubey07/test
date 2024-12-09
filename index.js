require("dotenv");
const express = require("express");
const cors = require("cors");
const connectDb = require("./config/Db");
const router = require("./routes/router");
const app = express();

app.use(cors("*"))
app.use(express.json());
app.use('/api/v1', router);

connectDb.connect();


app.get("/", (req, res) => {
    res.send("Server is Running");
});

app.listen(8080, () => {
    console.log(`Server is running on 8080`);
});
