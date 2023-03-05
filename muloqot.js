"use strict";
const place=consist("are you here");
const age = prompt("Nichcha yoshsan", "");
console.log("Men " + age + " yoshman");
const YoqtirganRang = [];
YoqtirganRang[0] = prompt("Yoqtirgan ranging qaysi #1", "");
YoqtirganRang[1] = prompt("Yoqtirgan ranging qaysi #2", "");
YoqtirganRang[2] = prompt("Yoqtirgan ranging qaysi #3", "");
console.log(YoqtirganRang);
const Malumot = [];
Malumot[0] = prompt("Yosh", "");
Malumot[1] = prompt("Ism", "");
Malumot[2] = prompt("Familiya", "");
console.log("Yoshim " + Malumot[0] + " da");
console.log("Ismim " + Malumot[1]);
console.log("Familiyam " + Malumot[2]);
const Youtube = prompt("Sen yoqtirgan youtuber kim ", "");
console.log(`https://youtube.com/${Youtube}`);
console.log(`string text line 1
string text line 2`);
"string text line 1
string text line 2"
const numberOfSeries = +prompt("Nechta serial ko’rdingiz?", "");
if (numberOfSeries < "5") {
  console.log("Kam serial ko'ribsiz");
} else if (numberOfSeries > 5 && numberOfSeries < 10) {
  console.log("Siz klaasik tomishabin ekansiz");
} else if (numberOfSeries > 15) {
  console.log("Siz serialchi zvezda ekansiz");
}
const seriesDB = {
  const: numberOfSeries,
  series: {},
  actors: {},
  genres: [],
  privat: false,
};
for (let i = 0; i < 2; i++) {
  const a = prompt("Oxirgi ko'rgan serialingiz"),
    b = prompt("Nechi baho berasiz");
  if (a != null && a != "" && b != null && b != "") {
    console.log("done");
  } else {
    console.log("404");
    i--;
  }
  seriesDB.series[a] = b;
}

console.log(seriesDB);
