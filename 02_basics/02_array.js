const marval_heros = ["Ironman", "Captan America", "Spiderman"]
const dc_heros = ["Superman", "Aquaman", "Batman"]

// marval_heros.push(dc_heros);
const allHeros = marval_heros.concat(dc_heros);

const allNewHeros = [...marval_heros, ...dc_heros]

const annotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]


const realAnotherArry = annotherArr.flat(Infinity);

// console.log(realAnotherArry);

// console.log(Array.isArray("MusabKhan"));
// console.log(Array.from("MusabKhan"));
// console.log(Array.from({name : "MusabKhan"})); // Intrusting thing that we will explore letter.

let score1 = 100;
let score2 = 200;
let score3 = 300;


console.log(Array.of(score1, score2, score3));

