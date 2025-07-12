//Problem buatlah bintang seperti berikut

//hasilnya
//*
//**
//***
//****
//*****
let input = 5;

for(let i = 1; i <= input; i++){
    let pattern = "";
        for(let j = 1; j <= i; j++){
            pattern +="*";
        }
    console.log(pattern);
} 
