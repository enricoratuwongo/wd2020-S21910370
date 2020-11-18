//Array 

let nilai = [90, 80, 75, 95, 85];

for(let i=0; i<nilai.length; i++) {
    console.log("Nilai = ", nilai[i] + 5);
}

console.log(nilai);

// nilai[2] = 90;
// console.log(nilai[nilai.length - 1]);


let enrico = ["Enrico", "Ratuwongo", 19, false];
console.log(enrico[enrico.length - 1]);
console.log(enrico);

//toString()
console.log(enrico.toString());
//join()
console.log(enrico.join(" - "));

//pop()
enrico.pop();
console.log(enrico.join(" - "))
//push()
enrico.push(false);
enrico.push("Hello");
console.log(enrico.join(" - "));

//shift()
enrico.shift();
console.log(enrico.join(" - "));

//unshift
enrico.unshift("enrico");
enrico.unshift("Prof");
console.log(enrico.join(" - "));

//splice()
enrico.splice(3,0, "Ratuwongo","adalah nama saya");
console.log(enrico.join(" - "));

//concat()
let buah = ["Pisang", "Durian", "Rambutan"];
let sayur = ["Kangkung", "Bayam", "Kentang"];
let biji = ["Kedelai", "Kacang Tanah", "Kacang Merah"];

let makanan = buah.concat(buah, sayur);
console.log(makanan);

//slice()
let cemilan = ["Kripik singkong", "Kripik kentang", "Kripik ikan", "Permen"];
let cemilanGurih = cemilan.slice(0, 3);
let cemilanManis = cemilan.slice(3);

console.log(cemilanGurih);
console.log(cemilanManis);

//sort()
let fruits = ["Jeruk", "Apel", "Mangga", "Jambu"];

buah.sort();

console.log(fruits); 

// let bilangan = [30, 1, 2, 3.5, 10, 100];
// bilangan.sort();
// console.log(bilangan); 

let bilangan = [30, 1, 2, 3.5, 10, 100];

let urutDariTerkecil = function(a, b) {
  return a - b;
};

let urutDariTerbesar = function(a, b) {
  return b - a;
};

console.log(bilangan.sort(urutDariTerkecil));
console.log(bilangan.sort(urutDariTerbesar));

//Reverse()
let buahBuahan = ["Jeruk", "Apel", "Mangga", "Jambu"];

buah.sort().reverse();

console.log(buahBuahan);