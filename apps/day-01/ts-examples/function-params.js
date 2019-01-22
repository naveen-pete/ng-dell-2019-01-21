function buildName(firstName, lastName) {
    if (lastName === void 0) { lastName = 'kumar'; }
    var fullName = '';
    if (firstName) {
        fullName = firstName;
    }
    if (lastName) {
        fullName = fullName + ' ' + lastName;
    }
    return fullName;
}
console.log(buildName('hari'));
console.log(buildName('hari', 'krishna'));
