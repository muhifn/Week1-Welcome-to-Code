// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word3 = 'wow JavaScript is so cool';
let exampleFirstWord3 = word3.substring(0, 3);
let exampleSecondWord10 = word3.substring(4, 14);
let exampleThirdWord2 = word3.substring(15, 17);
let exampleFourthWord2 = word3.substring(18, 20);
let exampleFifthWord4 = word3.substring(21, 25);

let firstWordLength = exampleFirstWord3.length;
let secondWordLength = exampleSecondWord10.length;
let thirdWordLength = exampleThirdWord2.length;
let fourthWordLength = exampleFourthWord2.length;
let fifthWordLength = exampleFifthWord4.length;

console.log('First Word: ' + exampleFirstWord3 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + exampleSecondWord10 + ', with length: ' + secondWordLength);
console.log('Third Word: ' + exampleThirdWord2 + ', with length: ' + thirdWordLength);
console.log('Fourth Word: ' + exampleFourthWord2 + ', with length: ' + fourthWordLength);
console.log('Fifth Word: ' + exampleFifthWord4 + ', with length: ' + fifthWordLength);
console.log(exampleFirstWord3 + " " + exampleSecondWord10 + " " + exampleThirdWord2 + " " + exampleFourthWord2 + " " + exampleFifthWord4);