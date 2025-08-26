const data = require("fs");
data.writeFileSync("xyz.txt", "hello node js");
const readdata = data.readFileSync("xyz.txt", "utf-8");
console.log(readdata);
data.appendFileSync("xyz.txt", " practice makes perfect");
const readata = data.readFileSync("xyz.txt", "utf-8");
console.log(readata);
