const companies = [ 'dell', 'infy', 'cts', 'value labs' ];

// const c1 = companies[0];
// const c2 = companies[1];

// array destructuring
const [c1, , c2] = companies;

console.log(c1);
console.log(c2);
// console.log(rest);

// object destructuring
const c = {
  name1: 'dell',
  address: {
    area: 'hitech city',
    place: 'hyderabad'
  }
  
};

const { name1: nm, address: { area } } = c;
console.log(nm);
console.log(area);
