"use strict";
exports.__esModule = true;
var ContainsSpaceValidator = /** @class */ (function () {
    function ContainsSpaceValidator() {
    }
    ContainsSpaceValidator.prototype.isAcceptable = function (s) {
        console.log('ContainsSpaceValidator.isAcceptable() invoked!');
        console.log('  input =', s);
        return s.indexOf(' ') < 0;
    };
    return ContainsSpaceValidator;
}());
var a = 10;
function sayHello() {
    console.log('Hi');
}
exports["default"] = ContainsSpaceValidator;
// export { a as x, sayHello };
