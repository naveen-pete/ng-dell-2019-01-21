import { StringValidator } from './string-validator';

class ContainsSpaceValidator implements StringValidator {
  isAcceptable(s: string): boolean {
    console.log('ContainsSpaceValidator.isAcceptable() invoked!');
    console.log('  input =', s);

    return s.indexOf(' ') < 0;
  }
}

const a = 10;

function sayHello() {
  console.log('Hi');
}

export { ContainsSpaceValidator, a as x, sayHello };
