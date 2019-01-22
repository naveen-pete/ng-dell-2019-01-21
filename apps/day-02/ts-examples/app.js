var companies = ['dell', 'infy', 'cts', 'value labs'];
// const c1 = companies[0];
// const c2 = companies[1];
// array destructuring
var c1 = companies[0], c2 = companies[2];
console.log(c1);
console.log(c2);
// console.log(rest);
// object destructuring
var c = {
    name1: 'dell',
    address: {
        area: 'hitech city',
        place: 'hyderabad'
    }
};
var nm = c.name1, area = c.address.area;
console.log(nm);
console.log(area);
