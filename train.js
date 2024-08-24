// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba bo'ling", // 0-20
//     "to'g'ri boshliq tanlang va koproq hato qiling",  // 20-30
//     "uzingizga ishlashni boshlang",      // 30-40
//     "siz kuchli bolgan narsani qiling",                 // 40-50
//     "yoshlarga investitsiya qiling",           //50-60
//     "endi dam oling, foydasi yo'q endi",   // 60
// ];
// // CALLBACK function
// function maslahatBering(a, callback) {
//     if (typeof a !== "number") callback("Insert a number", null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a < 20 && a <= 30) callback(null, list[1]);
//     else if (a < 20 && a <= 30) callback(null, list[2]);
//     else if (a < 20 && a <= 30) callback(null, list[3]);
//     else if (a < 20 && a <= 30) callback(null, list[4]);
//     else {
//         setInterval(function () {
//             callback(null, list[5]);
//         }, 1000);
//     }
// }

// console.log("passed here 0");

// maslahatBering(70, (err, data) => {
//     if (err) console.log("ERROR:", err);
//     else {
//         console.log(data);
//     }

// });
// console.log("passed here 1");


// ASYNC FUNCTION
// async function maslahatBering(a) {
//     if(typeof a !== 'number') throw new Error ("please insert a number");
//     else if (a <= 20) return list[0];
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3];
//     else if (a > 50 && a <= 60) return list[4];
//    else {
//     return new Promise((resolve, reject) => {
//         // setTimeout(() => {
//             setInterval(() => {
//             resolve(list[5]);  
//         }, 1000);
//     });
//    }
// }
 
// // CALL VIA then & catch

// console.log ("passed here 0")
// maslahatBering(25)
// .then(data => {
//     console.log("javob:", data);
// }).catch(err => {
//     console.log("error:", err);
// });
// console.log("passed here 1");


//  asyn/ await
// async function run() {
//    let javob = await maslahatBering(65);
//    console.log(javob);
//    javob = await maslahatBering(71);
//    console.log (javob);
//    javob = await maslahatBering(41);
//    console.log(javob);
// }
// run();


// A TASK MIT

// Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
// MASALAN countLetter("e", "engineer") 3ni return qiladi.

// function countLetter(letter, word) {
//     let count = 0;
    
//     for (let i = 0; i < word.length; i++) {
//         if (word[i] === letter) {
//             count++;
//         }
//     }
    
//     return count;
// }

// console.log("countLetter('a', 'Sarvarbek'): ",countLetter("a", "Sarvarbek"));


// B TASK MIT

// Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
// MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.


function countNumber(string) {
    let count = 0;
    
    for (let i = 0; i < string.length; i++) {
        if (!isNaN(string[i]) && string[i] !== ' ') {
            count++;
        }
    }
    
    return count;
}
let natija = countNumber(" Bu123strinda4taraqambor");
console.log("raqamlar", natija);