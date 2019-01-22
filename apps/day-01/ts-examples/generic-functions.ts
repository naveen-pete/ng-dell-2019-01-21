// function reverse(items: number[]): number[] {
//   var toreturn: number[] = [];
//   for (let i = items.length - 1; i >= 0; i--) {
//       toreturn.push(items[i]);
//   }
//   return toreturn;
// }


// function reverseStrings(items: string[]): string[] {
//   var toreturn: string[] = [];
//   for (let i = items.length - 1; i >= 0; i--) {
//       toreturn.push(items[i]);
//   }
//   return toreturn;
// }

function reverse<T>(items: T[]): T[] {
  var toreturn: T[] = [];
  for (let i = items.length - 1; i >= 0; i--) {
      toreturn.push(items[i]);
  }
  return toreturn;
}

console.log(reverse<number>([10, 20, 30]));
console.log(reverse<string>(['a', 'b', 'c']));

class Customer {
  name: string;
  age: number;
}

const customers: Customer[] = [
  { name: 'a', age: 10},
  { name: 'b', age: 20}
];
console.log(reverse<Customer>(customers));

