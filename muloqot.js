"use strict";
// const place=consist("are you here");
// const age = prompt("Nichcha yoshsan", "");
// console.log("Men " + age + " yoshman");
// const YoqtirganRang = [];
// YoqtirganRang[0] = prompt("Yoqtirgan ranging qaysi #1", "");
// YoqtirganRang[1] = prompt("Yoqtirgan ranging qaysi #2", "");
// YoqtirganRang[2] = prompt("Yoqtirgan ranging qaysi #3", "");
// console.log(YoqtirganRang);
// const Malumot = [];
// Malumot[0] = prompt("Yosh", "");
// Malumot[1] = prompt("Ism", "");
// Malumot[2] = prompt("Familiya", "");
// console.log("Yoshim " + Malumot[0] + " da");
// console.log("Ismim " + Malumot[1]);
// console.log("Familiyam " + Malumot[2]);
// const Youtube = prompt("Sen yoqtirgan youtuber kim ", "");
// console.log(`https://youtube.com/${Youtube}`);
// console.log(`string text line 1
// string text line 2`);
// "string text line 1
// string text line 2"
function template(strings, ...keys) {
  return (...values) => {
    const dict = values[values.length - 1] || {};
    const result = [strings[0]];
    keys.forEach((key, i) => {
      const value = Number.isInteger(key) ? values[key] : dict[key];
      result.push(value, strings[i + 1]);
    });
    return result.join("");
  };
}

const t1Closure = template`${0}${1}${0}!`;
// const t1Closure = template(["","","","!"],0,1,0);
t1Closure("Y", "A"); // "YAY!"

const t2Closure = template`${0} ${"foo"}!`;
// const t2Closure = template([""," ","!"],0,"foo");
t2Closure("Hello", { foo: "World" }); // "Hello World!"

const t3Closure = template`I'm ${"name"}. I'm almost ${"age"} years old.`;
// const t3Closure = template(["I'm ", ". I'm almost ", " years old."], "name", "age");
t3Closure("foo", { name: "MDN", age: 30 }); // "I'm MDN. I'm almost 30 years old."
t3Closure({ name: "MDN", age: 30 }); // "I'm MDN. I'm almost 30 years old."
