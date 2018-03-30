var crypto = require("crypto");
var key = "abc";
var text = "pawankumar@gmail.com"; // user password will be encrypted
console.log("Your text : " + text);
var ent = crypto.createCipher('aes-256-ctr', key).update(text, "utf-8", "hex");
var dec = crypto.createDecipher('aes-256-ctr', key).update(ent, "hex", "utf-8")
console.log("encrypted : " + ent);