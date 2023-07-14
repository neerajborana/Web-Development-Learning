const fs=require("fs");
const text = fs.readFileSync("1.txt","utf-8");
console.log(text);

console.log("Creating a New File")
fs.writeFileSync("n.txt",text);