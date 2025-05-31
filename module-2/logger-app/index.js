
const path = require("path")
const fs = require("fs")
const inputArguments = process.argv.slice(2)

const text = inputArguments.join(" ")
const timestamp=new Date();
console.log(timestamp)
const message = `${text} ${timestamp} \n`

if(!message){
    console.log("Please Provide a Message to log");
    process.exit(1)
}

const filePath= path.join(__dirname,"log.txt")

fs.appendFile(filePath,message,{encoding:"utf-8"},()=>{
    console.log("your log added succesfully")
})
console.log(filePath)