import "./a.mjs";
console.log("Before main module.");
const x = 1;
const y = x + 1;

for (let i = 0; i < 1000000; i++);
console.log("End of Main module.");
