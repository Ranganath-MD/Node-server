const express = require("express")
const port = 3005
const app = express()

app.get("/", (req, res) => {
    res.send("You are running express server")
})

app.get("/html", (req, res) => {
    res.send("<h2>You are serving html tags with express server</h2>")
})

app.listen(port, () => {
    console.log("server is running on port", port)
})