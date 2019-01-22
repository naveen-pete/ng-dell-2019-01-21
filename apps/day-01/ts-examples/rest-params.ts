// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(10, 20));

// function sum(numbers: number[]) {
//   let s = 0;

//   for(let i=0; i<numbers.length; i++) {
//     s += numbers[i];
//   }

//   return s;
// }

// console.log(sum([10, 20]));
// console.log(sum([10, 20, 30, 40]));
// console.log(sum([10, 20, 10, 20, 10, 20]));

function sum(...numbers: number[]) {
  console.log(numbers);
  console.log(typeof numbers);

  let s = 0;

  for(let i=0; i<numbers.length; i++) {
    s += numbers[i];
  }

  return s;
}

console.log(sum(10, 20));
console.log(sum(10, 20, 30, 40));
console.log(sum(10, 20, 10, 20, 10, 20));
