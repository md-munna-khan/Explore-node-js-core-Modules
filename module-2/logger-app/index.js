
const path = require("path")
const inputArguments = process.argv.slice(2)

const text = inputArguments.join(" ")
if(!text){
    console.log("Please Provide a Message to log");
    process.exit(1)
}

const filePath= path.join(__dirname,"log.txt")
console.log(filePath)