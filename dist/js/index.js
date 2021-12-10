// // 1  uzduotis


// let n = 20;

// if (n<0) {
//     console.log("Blogas");
// }else if(n>0){
//     console.log("Geras");
// }else{
//     console.log("n yra lygus 0")

// if (n % 2 == 0){
//     console.log("Skaičius lyginis");
// } else {
//     console.log("Skaicius nelyginis");
// }
// // }

// //  2 uzduotis
// let n2 = 2;
// let n1 = 1
// let n3 = 2

// if (n===2) {
//     console.log("Palaukite");
// }else if (n===3) {
//     console.log("Stop")
// } else if (n===1)("Pirmyn");
// else {
//     console.log("Ivestas skaicius nera nei 1, nei 2, nei 3");
// }

// 3 uzduotis 

// d = 2
// k = 8
// n = 5 
// telpa,
// d = 3
// k = 18
// n = 5
// netelpa

// let d = 2
// let k = 8
// let n = 5

// let  y = d*n

// if (y>k) {
//     console.log("Knygos telpa į dežes");
// }else if(y<k){
//     console.log("Knygos netelpa į dežes");
// }else
// {
//     console.log("Knygos telpa į dežes");
// }

// let d = 3 
// let k = 15 
// let n = 5 
// let t = d*n

// if (t>k) {
//     console.log ("Knygos telpa į dežes")
// }else if (t<k) {
//     console.log ("Knygos netelpa į dežes")
// } else {
//     console.log ("Knyogs telpa į dežes")
// }

// 4 užduotis 

// let n = 1221;

// let fourth = n % 10;
// let third = Math.floor(n / 10) % 10;
// let second = Math.floor(n / 100) % 10; 
// let first = Math.floor (n / 1000); 

// if (first == fourth) {
//     if ( first == third) {
//         console.log("Skaičius yra polindromas");
//     } else {
//         console.log("Skaicius nera polindromas");}
//     } else { console.log("Skaicius nera polindromas")
// }

let n = 1221;

let g = n.toString();

let gSplit= g.split("").reverse().join("");



console.log(gSplit);

let nReverse = parseInt (gSplit); 

if (n===nRevers) {
    console.log("polidromas");
} else {
    console.log("nera polindromas");
}
// Penkta uzduotis 


// n = 222442 

// let sixth = n % 10;

// let fifth = Math.floor (n / 10) % 10;

// let fourth = Math.floor (n / 100) % 10 ;

// let third = Math.floor (n / 1000) % 10 
// let second =  Math.floor (n / 10000) % 10 ;

// let first = Math.floor (n / 100000) % 10; 

// if ((sixth + fifth + fourth + third + second + first) % 4 == 0) {
//     console.log ("Bilietas laimingas");
// } else { 
//     console.log("Bilietas nelaimingas");
// }


// sesta uzduotis 

// septinta uzduotis 


// astunta uzduotis



// k= 5
let k = 5 

if (k<=6 && k>=1) {
    if (n % 2 == 0) {
        console.log("vyresnelis")
    } else {
        console.log("jaunelis");
    }} else {
        console.log("sesios reiksmes")
    }