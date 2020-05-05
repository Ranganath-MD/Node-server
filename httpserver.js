const http = require("http")
const port = 8080;

const server = http.createServer((req, res) => {
    res.end("You are running node server with core http module")
})

server.listen(port, () => {
    console.log("server running on port", port)
})