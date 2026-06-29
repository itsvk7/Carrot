import fs from "fs";

console.log(fs.readdirSync("events"));
console.log(fs.readdirSync("commands"));

console.log(process.cwd());
