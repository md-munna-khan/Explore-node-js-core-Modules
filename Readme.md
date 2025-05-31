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
# 📘 13-5: Making a Basic Logger App & Path Module

A basic Node.js CLI logger app that writes user messages with timestamps into a `log.txt` file using the `fs` and `path` modules.

---

## 🚀 Features

* Accept user-defined message from the terminal.
* Append message along with timestamp into a log file.
* Automatically creates the log file if it doesn’t exist.
* Uses Node.js built-in modules: `fs`, `path`, and `process`.

---

## 📁 Folder Structure

```
log-app/
│
├── log.js          # Main logger script
└── log.txt         # Output log file
```

---

## 🧑‍💻 How to Use

### 1. Open your terminal.

### 2. Run the following command:

```bash
node log.js "Your message goes here"
```

✅ Example:

```bash
node log.js "Server started"
```

---

## 📄 Sample Output in `log.txt`

```
Server started Sat May 31 2025 16:00:12 GMT+0600 (Bangladesh Standard Time)
```

---

## ⚙️ Code Explanation

```js
const path = require("path");
const fs = require("fs");

// Get arguments from terminal input
const inputArguments = process.argv.slice(2);
const text = inputArguments.join(" ");
const timestamp = new Date();
const message = `${text} ${timestamp} \n`;

// Input validation
if (!message) {
    console.log("Please provide a message to log");
    process.exit(1);
}

// Set the path to the log file
const filePath = path.join(__dirname, "log.txt");

// Append log message to the file
fs.appendFile(filePath, message, { encoding: "utf-8" }, () => {
    console.log("✅ Log added successfully");
});

console.log("📝 Log saved at:", filePath);
```

---

## 💡 Why Use `path` Module?

* To create a consistent file path across different operating systems.
* `path.join(__dirname, "filename")` ensures the correct full path regardless of OS.


