// Synchronous code
console.log('withdraw');
console.log('print passbook');
console.log('apply loan');

// --------------------------
// async - callback mechanism
function withdraw(cb) {
  console.log('withdraw');
  cb();
}

withdraw(() => {
  console.log('print passbook');
});
console.log('apply loan');

// --------------------------
// async - callback mechanism with time delay
function withdraw(cb) {
  console.log('withdraw - begin');
  setTimeout(()=>{
    console.log('withdraw - end');
    // cb(null, 10000);
    cb('insufficient balance');
  }, 4000);
}

function withdrawCallback(err, amount) {
  if(err) {
    console.log('Error:', err);
  } else {
    console.log('print passbook:', amount);
  }
}

withdraw(withdrawCallback);
console.log('apply loan');
