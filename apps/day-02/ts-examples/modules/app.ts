interface StringValidator {
  isAcceptable(s: string): boolean;
}

class ZipCodeValidator implements StringValidator {
  isAcceptable(s: string) {
    console.log('ZipCodeValidator.isAcceptable() invoked!');
    console.log('  input =', s);

    return s.length === 5;
  }
}

class ContainsSpaceValidator implements StringValidator {
  isAcceptable(s: string): boolean {
    console.log('ContainsSpaceValidator.isAcceptable() invoked!');
    console.log('  input =', s);

    return s.indexOf(' ') < 0;
  }
}

let result: boolean;

let myValidator = new ZipCodeValidator();
result = myValidator.isAcceptable('123');
console.log('  result =', result);

result = myValidator.isAcceptable('12345');
console.log('  result =', result);

myValidator = new ContainsSpaceValidator();
result = myValidator.isAcceptable('Bengaluru');
console.log('  result =', result);

result = myValidator.isAcceptable('New Delhi');
console.log('  result =', result);
