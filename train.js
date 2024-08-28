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


// function countNumber(string) {
//     let count = 0;
    
//     for (let i = 0; i < string.length; i++) {
//         if (!isNaN(string[i]) && string[i] !== ' ') {
//             count++;
//         }
//     }
    
//     return count;
// }
// let natija = countNumber(" Bu123strinda4taraqambor");
// console.log("raqamlar", natija);

// C-TASK: 

// Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
// MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;







//  function haveSameLetters(str1, str2) {
//   // Har ikkala parametrni kichik harflarga aylantiramiz (katta-kichik harf farqlari bo'lmasligi uchun)
//   str1 = str1.toLowerCase();
//   str2 = str2.toLowerCase();

//   // Harflarni saralaymiz
//   let sortedStr1 = str1.split('').sort().join('');
//   let sortedStr2 = str2.split('').sort().join('');

//   // Ikkala matnni taqqoslaymiz
//   return sortedStr1 === sortedStr2;
// }

// // Misollar
// console.log(haveSameLetters("listen", "silent")); // true
// console.log(haveSameLetters("hello", "bello")); // false





// D-TASK: 

// Shunday class tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin,
//  hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. 
//  Har bir method ishga tushgan vaqt ham log qilinsin.
// MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 
// 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 
//   4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!

class Shop {
  constructor(olmakg, banankg, giloskg) {
      this.products = {
          olma: olmakg,
          banan: banankg,
          gilos: giloskg
      };
  }

  // Qoldiq methodi - mahsulotlar miqdorini qaytaradi
  qoldiq() {
      const time = new Date().toLocaleTimeString();
      console.log(`Hozir ${time}da ${this.products.olma}kg olma, ${this.products.banan}kg banan va ${this.products.gilos}kg gilos mavjud!`);
  }

  // Sotish methodi - mahsulotlarni sotish uchun ishlatiladi
  sotish(product, quantity) {
      if (this.products[product] !== undefined && this.products[product] >= quantity) {
          this.products[product] -= quantity;
          const time = new Date().toLocaleTimeString();
          console.log(`${time}da ${quantity}kg ${product} sotildi.`);
      } else {
          console.log("Sotib olish uchun yetarli mahsulot mavjud emas yoki noto'g'ri mahsulot nomi kiritildi.");
      }
  }

  // Qabul methodi - mahsulotlar qabul qilish uchun ishlatiladi
  qabul(product, quantity) {
      if (this.products[product] !== undefined) {
          this.products[product] += quantity;
          const time = new Date().toLocaleTimeString();
          console.log(`${time}da ${quantity}kg ${product} qabul qilindi.`);
      } else {
          console.log("Noto'g'ri mahsulot nomi kiritildi.");
      }
  }
}

// Klassdan foydalanish
const shop = new Shop(10, 15, 7); // 10kg olma, 15kg banan, 7kg gilos bilan shop yaratildi

shop.qoldiq(); // Mahsulotlar qoldig'ini ko'rish
shop.sotish('olma', 4); // 4kg olma sotish
shop.qabul('gilos', 3); // 3kg gilos qabul qilish
shop.qoldiq(); // Yangi qoldiqni ko'rish
