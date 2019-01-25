// --------------------------
// async - promise

var p = new Promise((resolve, reject) => {
  console.log('withdraw - begin');
  setTimeout(()=>{
    console.log('withdraw - end');
    // resolve(10000);
    reject('insufficient balance');
  }, 4000);
});

p.then((amount) => {
  console.log('print passbook:', amount);
});

p.catch((err) => {
  console.log('Error:', err);
});

console.log('apply loan');
