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
function reverse(items) {
    var toreturn = [];
    for (var i = items.length - 1; i >= 0; i--) {
        toreturn.push(items[i]);
    }
    return toreturn;
}
console.log(reverse([10, 20, 30]));
console.log(reverse(['a', 'b', 'c']));
var Customer = /** @class */ (function () {
    function Customer() {
    }
    return Customer;
}());
var customers = [
    { name: 'a', age: 10 },
    { name: 'b', age: 20 }
];
console.log(reverse(customers));
