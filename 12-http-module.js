const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome Bitch");
  }
  if (req.url === "/about") {
    res.end("Here is my dick");
  }
  res.end(`
  <h1>Oops!</h1>
  <p>We can't seen to find it boss</p>
  <a href="/">back</a>`);
});

server.listen(5000);
