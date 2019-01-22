import { ZipCodeValidator as zcv } from './validators/zip-code-validator';
import { ContainsSpaceValidator } from './validators/contains-space-validator';

let result: boolean;

let myValidator = new zcv();
result = myValidator.isAcceptable('123');
console.log('  result =', result);

result = myValidator.isAcceptable('12345');
console.log('  result =', result);

myValidator = new ContainsSpaceValidator();
result = myValidator.isAcceptable('Bengaluru');
console.log('  result =', result);

result = myValidator.isAcceptable('New Delhi');
console.log('  result =', result);
