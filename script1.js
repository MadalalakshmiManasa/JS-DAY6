//question 1
var a = "Manasa";
var middlepart = a.slice(1,4);
var  result = middlepart.toUpperCase();
console.log("que 1:",result);
//question 2
var str = "ManasaSai";
var upperstr = str.toUpperCase();
var len = upperstr.length;
console.log("que 2:",upperstr);
console.log("que 2:",len);
////question 3
// let str = "srujana";
// let char = str.charCodeAt(str.charAt(1).length-1);
// console.log(char);

let strss = "hello";
let positions = 1;
let chars = strss.charAt(positions);
let ascii = chars.charCodeAt(0);
console.log("que 3:",chars);
console.log("que 3:",ascii);

//question 4
var str = "  helloManasa  ";
var str2 = str.trim();
var slice = str2.slice(1,5);
console.log("que 4:",slice);

//question 5 
var string1 = "Manasa";
var string2 = "MADALA";
var result = string1+string2.toLowerCase();
// var result = toUpperCase();
console.log("que 5:",result);

//question 6 
let string = "    hello frnds";
let trimmed = string.trimStart(); 
let slicedStr = trimmed.slice(1); 
console.log("que 6:",slicedStr); 

//question 7 

let strs = "hello";
let position = 3;
let char = strs.charAt(position).toUpperCase();
console.log("que 7:",char); 

//question 8 
var trimstr = "Manasa   ";
var trimend = "   Madala";
var trim = trimstr.trimEnd();
var trims = trimstr.trimStart();
var res = trim;
console.log("que 8:",trim);
console.log("que  8:",trims);

//question 9 
var input = "   Helloworld   ";
var trimmedStr = input.trim();
console.log("que 9:",trimmedStr);
var uppercase = trimmedStr.toUpperCase(); 
var result = uppercase.slice(1, 5); 
console.log("que 9:",result); 

//question 10
let string5 = "HELLO";
let string6 = "WORLD";
let lowerStr1 = string5.toLowerCase();
let lowerStr2 = string6.toLowerCase();
let concatenatedStr = lowerStr1 + "  " + lowerStr2;
console.log("que 10:",concatenatedStr);

let firstChar = concatenatedStr.charAt(0);
console.log("que 10:",firstChar); 