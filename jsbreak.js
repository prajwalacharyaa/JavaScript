// //let i = ['1','2','3','4','5'];
// let text ="";
// for(let i =0; i<10; i++){
//     if(i===3){
//         break;
//     }
//     text += "the number is"+i;
// }
// console.log(text);

// const letters = new Set(["a",1],["b",2]);
// console.log(letters)

const letters = new Set(["a","b","c"]);

// Get all Entries
const myIterator = letters.entries();
console.log(myIterator)

// const letterMap = new Map(["a","b",1]);
// console.log(letterMap)