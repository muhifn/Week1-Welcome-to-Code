// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

let word3 = 'wow JavaScript is so cool';
let exampleFirstWord3 = word3.substring(0, 3);
let exampleSecondWord10 = word3.substring(4, 14);
let exampleThirdWord2 = word3.substring(15, 17);
let exampleFourthWord2 = word3.substring(18, 20);
let exampleFifthWord4 = word3.substring(21, 25);

console.log('First Word: ' + exampleFirstWord3);
console.log('Second Word: ' + exampleSecondWord10);
console.log('Third Word: ' + exampleThirdWord2);
console.log('Fourth Word: ' + exampleFourthWord2);
console.log('Fifth Word: ' + exampleFifthWord4);
console.log(exampleFirstWord3 + " " + exampleSecondWord10 + " " + exampleThirdWord2 + " " + exampleFourthWord2 + " " + exampleFifthWord4);