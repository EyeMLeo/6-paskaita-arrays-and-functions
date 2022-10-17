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
// console.log(sent);
// console.log(sent1);
// console.log(sent2);




for (const iterator of sent2) {
 sent1.push(iterator);
}
console.log(sent1.toString());