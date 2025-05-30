//1 synchronous
// file read/ i/o intensive ---> single thread--> not go to thread pool


//1 synchronous
// file read/ i/o intensive ---> single thread--> -->event loop --->go to thread pool

//================== read file system ============
// const fs = require('fs');
// const data =fs.readFileSync('./hello.txt',{encoding:"utf8"})


// const fs = require('fs');
//  This imports the File System module built into Node.js.

// With this fs module, you can read from, write to, and modify files.
// console.log("task 1")
// const text = "Learning File System";

// fs.writeFileSync("./hello.txt",text);
// console.log("task 3")

// writeFileSync() is a synchronous method that writes the content of text to a file named hello.txt.

// If hello.txt doesn't exist, it creates the file.

// If the file already exists, it overwrites the content.

// Since it's synchronous, the next line won't run until the file writing is completed.
// const data =fs.readFileSync('./hello.txt',{encoding:"utf8"});

// This reads the content of hello.txt synchronously.

// { encoding: "utf8" } ensures the content is read as a text string, not as a raw buffer.

// The result is stored in the variable data.
// console.log("task 4")
// console.log(data)



///============== readStream=============
const { error } = require('console');
const fs = require('fs');


// fs.readFile("./hello.txt",{encoding: "utf-8"},(err,data)=>{
//     if(err){
//         console.log("something went Wrong",err)
//         return;
//     }
//   fs.writeFile("./helloWorld.txt",data,{encoding: "utf-8"},(err)=>{
//     if(err){
//         console.log("something went Wrong",err)
//         return;
//     }
//     console.log( " writing data successfull")
// })
// })

const readStream =fs.createReadStream("./hello.txt",{encoding:"utf-8"});
const writeStream =fs.createWriteStream("./helloWorld.txt",{encoding:"utf-8"});

readStream.on("data",(data)=>{
    console.log(data)

    writeStream.write(data,(err)=>{
       if(err){
         throw error ("error",err)
       }
    })
});

// error handel
readStream.on("error",(err)=>{
  if(err){
         throw error ("error",err)
       }
})

readStream.on("end" ,()=>{
    console.log("reading succesfully");
    writeStream.end()
})
writeStream.on("finish" ,()=>{
    console.log("writing succesfully");
    writeStream.end()
})