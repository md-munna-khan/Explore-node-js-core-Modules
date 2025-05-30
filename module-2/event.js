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