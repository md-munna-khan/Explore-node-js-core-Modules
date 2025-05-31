const http = require("http");
const { json } = require("stream/consumers");
const data=[
  {
    "id": 1,
    "name": "Munna Khan",
    "email": "mk8761174@gmail.com",
    "role": "Worker",
    "coins": 1300
  },
  {
    "id": 2,
    "name": "Ayesha Rahman",
    "email": "ayesha@example.com",
    "role": "Buyer",
    "coins": 800
  },
  {
    "id": 3,
    "name": "Tanvir Hasan",
    "email": "tanvir@example.com",
    "role": "Admin",
    "coins": 5000
  }
]

const server = http.createServer((req, res) => {
  if (req.url === "/todos" && req.method === "GET") {
    // first way====
    res.writeHead(200, {
      "content-type": "text/html",
    //   "email":"ph@gmail.com"
    });
    //========================
    // second way
    // res.setHeader("content-type","text/plain")
    // res.setHeader("email","ph2@gmail.com")
    // res.statusCode=201
    res.end(`<h1>hello world</h1> <h2>hello world</h2>`);
  } else if (req.url === "/todos/create-todo" && req.method === "POST") {
    res.end("Todo Created");
  } else {
    res.end("404");
  }
});

server.listen(5000, "127.0.0.1", () => {
  console.log("server listening to port 5000");
});
/**\
 * /todos Get -all todo
 *
 * /todos /create todos post create
 */
