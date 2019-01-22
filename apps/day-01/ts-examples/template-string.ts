var name1: string = 'hari';
var age: number = 25;

// var details = 'Hello, I am ' + name1 + '. I am ' + age + ' years old.';
var details = `
  Hello, I am ${name1}. 
  I am ${age} years old.
`;

console.log('name:', name1);
console.log('age:', age);
console.log('using template string:', details);