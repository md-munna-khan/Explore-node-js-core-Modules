const http = require("http")


const server=http.createServer((req,res)=>{
   if(req.url === "/todos" && req.method ==="GET"){
    res.end("ALL Todos")
   }else if(req.url === "/todos/create-todo" && req.method ==="POST"){
    res.end("Todo Created")
   } else{
    res.end("404")
   }
})

server.listen(5000,"127.0.0.1",()=>{
    console.log("server listening to port 5000")
})
/**\
 * /todos Get -all todo
 * 
 * /todos /create todos post create
 */