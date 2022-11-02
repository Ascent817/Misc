let encoded = Buffer.from("HELLO WORLD").toString("base64");
console.log(encoded);
let decoded = Buffer.from(encoded, "base64").toString("ascii");
console.log(decoded);