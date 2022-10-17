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

// let sent1 = [ 'Sveiki', 'mano', 'vardas', 'James' ];
// let sent2 = [ '. ', 'is', 'Londono'];
// // console.log(sent);
// // console.log(sent1);
// // console.log(sent2);

// sent1=sent1.concat(sent2)


// // for (const iterator of sent2) {
// //  sent1.push(iterator);
// // }
// console.log(sent1);









// ----------------------Užduotys--------------------------

// Susikurkite skaičių masyva 'numbersArray' su siais nariais : 2, 12, 33, -7, 28, 49, -17, 19, 42, -14, -10, 20
let numbersArray=[ 2, 12, 33, -7, 28, 49, -17, 19, 42, -14, -10, 20];
// Sekančias užduotis atlikti su naujais masyvais(kopijomis)
let numbersArrayCopy=numbersArray.slice();
console.log(numbersArrayCopy);


function ArrayF(Arr){
for(let i=0;i<Arr.length;i++){

Arr[i]=Arr[i]*2;

}
}
// console.log(numbersArray)
ArrayF(numbersArrayCopy)
console.log(numbersArrayCopy);






// Padauginti masyvo narius iš 2


// Pakelti masyvo narius kvadratu
let numbersArrayCopy2=numbersArray.slice();

function ArraySquared(ArrSq){
for(let i=0;i<ArrSq.length;i++){

ArrSq[i]=ArrSq[i]*ArrSq[i];

}
}

ArraySquared(numbersArrayCopy2)
console.log(numbersArrayCopy2);

// Padauginti masyvo narius iš jų index'0 (vietos masyve)

// Atrinkti tiktai teigimų elementų masyvą

// Atrinkti tiktai neigiamų elementų masyvą

// Atrinkti tiktai lyginių skaičių masyvą

// Atrinkti tiktai nelyginių skaičių masyvą

// Visas neigiamas vertes masyve padaryti teigiamomis

// Pakelti visas masyvo reikšmes laipsniu 'index'

// Atrinkti tik natūralių skaičių masyvą

// Suapvalinti visas masyvo reikšmes iki sveikų skaičių

// Atrinkti kas antrą elementą

// Atrinkti kas penktą elementą

// Sukurti funkciją, kuri ima masyvą ir atspausdina kiek- vieną jo reikšmę atskirai: [0] => 2. (nieko negrąžina)

// Sukurti funkciją, kuri ima masyvą ir grąžina visų jo elementų sumą

// Sukurti funkciją, kuri ima masyvą ir grąžina visų ele- mentų vidurkį

// Sukurti funkciją, kuri ima masyvą ir grąžina didžiau- sią skaičių masyve.

// Sukurti funkciją, kuri ima masyvą ir grąžina mažiau- sią skaičių masyve.

// Sukurti funkciją, kuri ima masyvą ir išrikiuja jo ele- mentus nuo mažiausio iki didžiausio ir grąžina tą masyvą.