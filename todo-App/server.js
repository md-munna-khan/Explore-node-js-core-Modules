const http = require("http");
const path=require ("path")
const filePath=path.join(__dirname, "./db/todo.json")
const fs = require("fs");


// Get All todos
const server = http.createServer((req, res) => {
  if (req.url === "/todos" && req.method === "GET") {
    const data = fs.readFileSync(filePath,{encoding:"utf-8"})
    res.writeHead(200, {
      "content-type": "application/json",
  
    });
  
    res.end(data);
  }
  // post todos
  else if (req.url === "/todos/create-todo" && req.method === "POST") {
let data = ""
req.on("data",(chunk)=>{
    data = data + chunk
})

req.on("end",()=>{
  
    const {name,email} = JSON.parse(data)
    console.log(data)
    console.log(name,email)
    const createdAt = new Date().toLocaleString()
   const allTodos= fs.readFileSync(filePath,{encoding:"utf-8"})
  const parseAllTodos = JSON.parse(allTodos)
  console.log(parseAllTodos)
  parseAllTodos.push({name,email,createdAt})
  fs.writeFileSync(filePath,JSON.stringify(parseAllTodos,null,2),   {encoding:"utf-8"})
  res.end(JSON.stringify(name,email,createdAt,null,2));
})
// const allTodos=fs.writeFileSync(filePath,{encoding:"utf-8"});
    
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
