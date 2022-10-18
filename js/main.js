'use strict'
console.log('main.js');



// let array=["Jazz","Bluez"]
// console.log(array);

// array.push("Rock-n-roll");
// console.log(array);

// array[1]="Classics";
// console.log(array);

// console.log(array.shift(1));
// console.log(array);

// array.unshift("Rap","Reggae")
// console.log(array);


// ------------------------------------ 2 uzduotis-----------------------------------------


// [10:16] Marius Kuzminskas
// 2. let randomArr = [11, 'cat', true, 4, 'mouse' 5, 9, 5, 76, false]
//    1. atspausdinti kiekvieno masyvo tipa consoleje
//  like 1

// let randomArr = [11, 'cat', true, 4, 'mouse', 5, 9, 5, 76, false];
// // for (const element of randomArr) {
// // console.log( element+"is  "   +(typeof element));

// // //    console.log(`${randomArr[i]} yra ${typeof randomArr[i]}`);
// // }

// // for (let i = 0; i < randomArr.length; i++) {
// //     console.log(randomArr[i]);
// // }




// // [10:16] Marius Kuzminskas
// // 2. atspausdinti kiekvieno masyvo tipa naujame masyve
// // let newArray=[]
// // for (const elementas of randomArr) { 
// //     console.log(typeof elementas);

// //     newArray.push(typeof elementas)

// // }

// // console.log(newArray);
// console.log(randomArr);



// let numbersArr=[11,-2,34,45,19-5,6];
// let numbersArr1=[8,-2,34,-45,-19-5,6];
// let numbersArr2=[-1,0,1];



// for (const iterator of numbersArr) {
//     if (iterator >=0) {
// console.log(iterator);        
//     }
// }

// function getMaxSubSum(Arr){
//     for (const iterator of Arr) {
//         if (iterator >=0) {
//     console.log(iterator);        
//         }
//     }

// // console.log("fuction called")

// }

// getMaxSubSum(numbersArr)



// [12:07] Marius Kuzminskas
// 5. let sent1 = [ 'Sveiki', 'mano', 'vardas', 'James' ] let sent2 = [ '. ', 'is', 'Londono']   1. sujujngti masyvus i viena   2. suskaicuoti kiek kieviename masyve yra elementu   3. is sujungto masyvo grazinti atskirame masyve  ['vardas', 'James', '. ', 'is' ]

let sent1 = [ 'Sveiki', 'mano', 'vardas', 'James' ];
let sent2 = [ '. ', 'is', 'Londono'];
// // console.log(sent);
// // console.log(sent1);
// // console.log(sent2);

sent1=sent1.concat(sent2)

console.log(sent1);

// // for (const iterator of sent2) {
// //  sent1.push(iterator);
// // }
// console.log(sent1);


// [12:43] Marius Kuzminskas
// //    3.1. istrinti 'mano'
//  like 8





// [12:43] Marius Kuzminskas
// //    3.2. vietoj 'Sveiki' iterpti "Laba diena"
//  like 8

sent1.splice(0,1,"laba diena")
console.log(sent1);

// [12:43] Marius Kuzminskas
// '

// [12:44] Marius Kuzminskas
// //    3.3 tarp 'vardas' ir 'James' iterpti 'yra'
//  like 8

sent1.splice(4,0,"yra")
console.log(sent1);

// [13:02] Marius Kuzminskas
// 1. sujujngti masyvus i viena
//  like 6

// [13:02] Marius Kuzminskas
//  2. suskaicuoti kiek kieviename masyve yra elementu
//  like 5

console.log(sent1.length);



// [13:02] Marius Kuzminskas
// 3. is sujungto masyvo grazinti atskirame masyve  ['vardas', 'James', '. ', 'is' ]
//  like 4








// ----------------------Užduotys--------------------------

// Susikurkite skaičių masyva 'numbersArray' su siais nariais : 2, 12, 33, -7, 28, 49, -17, 19, 42, -14, -10, 20

let numbersArray=[ 2, 12, -5.5, 33, -7, 28, 11.789, 49, -17, 19, 42, -14, -10, 20, 8.9];

// Sekančias užduotis atlikti su naujais masyvais(kopijomis)
// let numbersArrayCopy=numbersArray.slice();
// console.log(numbersArrayCopy);


// function ArrayF(Arr){
// for(let i=0;i<Arr.length;i++){

// Arr[i]=Arr[i]*2;

// }
// }
// // console.log(numbersArray)
// ArrayF(numbersArrayCopy)
// console.log(numbersArrayCopy);






// Padauginti masyvo narius iš 2


// Pakelti masyvo narius kvadratu
// let numbersArrayCopy2=numbersArray.slice();

// function ArraySquared(ArrSq){
// for(let i=0;i<ArrSq.length;i++){

// ArrSq[i]=ArrSq[i]*ArrSq[i];

// }
// }

// ArraySquared(numbersArrayCopy2)
// console.log(numbersArrayCopy2);

// Padauginti masyvo narius iš jų index'0 (vietos masyve)

// let numbersArrayCopy3=numbersArray.slice();

// function ArrayxIndex(ArrxI){
// for(let i=0;i<ArrxI.length;i++){

//     ArrxI[i]=ArrxI[i]*i;

// }
// }

// ArrayxIndex(numbersArrayCopy3)
// console.log(numbersArrayCopy3);
















// Atrinkti tiktai teigimų elementų masyvą
// let numbersArrayCopy4=numbersArray.slice();
// console.log(numbersArrayCopy4);


// for (let i = numbersArrayCopy4.length; i >= 0; i--) {
//     // console.log(`i yra ${i} ir jo narys lygus ${numbersArrayCopy4[i]}`);

// if (numbersArrayCopy4[i]<0) {

//     numbersArrayCopy4.splice(i,1)
    
// }
// }
// console.log(numbersArrayCopy4);

// Atrinkti tiktai neigiamų elementų masyvą
// console.log(numbersArray);
// const newArrayNeg=[]

// for (let i =0;i< numbersArray.length; i++) {
   
    
//     if (numbersArray[i]<0) {
//         newArrayNeg.push(numbersArray[i])
//     }
// }

// console.log(newArrayNeg);





// Atrinkti tiktai lyginių skaičių masyvą

// console.log(numbersArray);
// const newArrayEven=[]

// for (let i =0;i< numbersArray.length; i++) {
   
    
//     if (numbersArray[i]%2===0) {
//         newArrayEven.push(numbersArray[i])
//     }
// }

// console.log(newArrayEven);




// Atrinkti tiktai nelyginių skaičių masyvą
// console.log(numbersArray);
// const newArrayOdd=[]

// for (let i =0;i< numbersArray.length; i++) {
   
    
//     if ((numbersArray[i]+1)%2===0) {
//         newArrayOdd.push(numbersArray[i])
//     }
// }

// console.log(newArrayOdd);



// Visas neigiamas vertes masyve padaryti teigiamomis
// console.log(numbersArray);
// const ArrayPos=[]
// for (let i = 0; i < numbersArray.length; i++) {
// numbersArray[i]<0? ArrayPos.push(numbersArray[i]*-1):ArrayPos.push(numbersArray[i]) 
// }
// console.log(ArrayPos);



// Pakelti visas masyvo reikšmes laipsniu 'index'

// console.log(numbersArray);
// const ArrayTIndex=[]

// for (let i = 0; i < numbersArray.length; i++) {
//     // const element = array[i];
//     ArrayTIndex.push(numbersArray[i]**i)
// }
// console.log(ArrayTIndex);


// ----------------------------Atrinkti tik natūralių skaičių masyvą

// Suapvalinti visas masyvo reikšmes iki sveikų skaičių

// console.log(numbersArray);
// let newArray=[]
// for (const iterator of numbersArray) {
// newArray.push(+iterator.toFixed(0));
// // console.log();

// }
// console.log(newArray);

// // const ArrayTIndex=[]



// Atrinkti kas antrą elementą

// Atrinkti kas penktą elementą

// Sukurti funkciją, kuri ima masyvą ir atspausdina kiek- vieną jo reikšmę atskirai: [0] => 2. (nieko negrąžina)

// Sukurti funkciją, kuri ima masyvą ir grąžina visų jo elementų sumą

// Sukurti funkciją, kuri ima masyvą ir grąžina visų ele- mentų vidurkį

// Sukurti funkciją, kuri ima masyvą ir grąžina didžiau- sią skaičių masyve.

// Sukurti funkciją, kuri ima masyvą ir grąžina mažiau- sią skaičių masyve.

// Sukurti funkciją, kuri ima masyvą ir išrikiuja jo ele- mentus nuo mažiausio iki didžiausio ir grąžina tą masyvą.