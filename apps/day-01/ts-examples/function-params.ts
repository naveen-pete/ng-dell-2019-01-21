function buildName (firstName?: string, lastName: string = 'kumar') {
  let fullName = '';
  if(firstName) {
    fullName = firstName;
  }
  if(lastName) {
    fullName = fullName + ' ' + lastName;
  }
  return fullName;
}

console.log(buildName('hari'));
console.log(buildName('hari', 'krishna'));
