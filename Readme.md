In this module, you’ll start by understanding the event-driven heart of Node.js and explore how it handles tasks synchronously and asynchronously, especially when it comes to reading files, working with buffers, and streaming data efficiently.



But that’s just the beginning…

By the end of this module, you’ll be:

Building your own logger app to track events and activities
Navigating the filesystem using the Path module
Creating a basic ToDo app using Node’s native HTTP server
Implementing routing, setting custom response headers, and using Postman to test your API
Handling CRUD operations (Create, Read, Update, Delete) on ToDos with real HTTP requests—query params and all!


This module bridges the gap between learning and doing. It's where you transform knowledge into projects, gain confidence in Node.js fundamentals, and start thinking like a real backend developer.



Let’s go—your first full Node-powered app is just a few lessons away!
## 13-1 What is an event module?
```js
const EventEmitter = require('node:events');// Node.js এর events মডিউল থেকে EventEmitter ক্লাসকে require করে নিয়ে এসেছি।

//এই EventEmitter হচ্ছে একটি বিল্ট-ইন ক্লাস যা দিয়ে ইভেন্ট তৈরি, শুনা (listen), এবং রেসপন্স করা যায়।

class SchoolBell extends EventEmitter{} ;// SchoolBell নামে একটি নতুন ক্লাস তৈরি করছি।

//এই ক্লাসটি EventEmitter কে extend করেছে। অর্থাৎ SchoolBell এখন EventEmitter এর সব ফিচার ব্যবহার করতে পারবে — যেমন .on(), .emit() ইত্যাদি।
const schoolBell = new SchoolBell(); //SchoolBell ক্লাস থেকে schoolBell নামে একটি ইনস্ট্যান্স (object) তৈরি করলাম।

// এই ইনস্ট্যান্স দিয়েই আমরা ইভেন্ট রেজিস্টার করবো এবং ট্রিগার করবো।

schoolBell.on("ring",()=>{
    console.log("yahoo  class sesh")
});
schoolBell.on("ring",()=>{
    console.log("Dhat arekta class ase")
});

schoolBell.on("broken",()=>{
    console.log("oh no bell is broken")
})

schoolBell.emit("ring")
schoolBell.emit("broken")
```

## 13-3 Asynchronous way to read and write files
- asynchronous readfile 
 ###### syntax => fs.readFile(path, options, callback);
![alt text](image.png)
 
```js

const fs = require('fs');
console.log("task 1")

fs.readFile("./hello.txt",{encoding: "utf-8"},(err,data)=>{
    if(err){
        console.log("something went Wrong",err)
        return;
    }
    console.log(data)
})

console.log("task 2")
```

```js
/// write file =============

// Syntax
// fs.writeFile(file, data, options, callback);

let text="munna vi"
fs.writeFile("./hello.txt",text,{encoding: "utf-8"},(err)=>{
    if(err){
        console.log("something went Wrong",err)
        return;
    }
    console.log( " writing data successfull")
})
```
![alt text](image-1.png)

## 13-4 Buffer and Streaming
![alt text](image-2.png)

```js
const fs = require("fs");

const readStream = fs.createReadStream("./hello.txt", { encoding: "utf-8" });
const writeStream = fs.createWriteStream("./helloWorld.txt", { encoding: "utf-8" });

// When data is read from the input file
readStream.on("data", (data) => {
    console.log(data); // print the chunk

    writeStream.write(data, (err) => {
        if (err) {
            throw new Error("Write error: " + err); // ✅ FIXED: correct error handling
        }
    });
});

// Handle reading errors
readStream.on("error", (err) => {
    if (err) {
        throw new Error("Read error: " + err); // ✅ FIXED: correct error handling
    }
});

// When reading is finished
readStream.on("end", () => {
    console.log("Reading successfully completed");
    writeStream.end(); // finish the write stream
});

// When writing is finished
writeStream.on("finish", () => {
    console.log("Writing successfully completed");
});
```
## 13-5 Making a basic logger app & Path module
![alt text](image-3.png)