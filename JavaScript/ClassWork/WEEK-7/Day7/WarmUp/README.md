* * In JavaScript, a Boolean is a data type that represents one of two possible values: true or false. Booleans are often used in conditional statements, comparisons, and logic operations to control the flow of a program.

1. What will this code log, and why?
* console.log(true && false); false, both have to be true
* console.log(false || true); true, short circuits the last true
* console.log(!false); true, "!" means not false

2. What will this code log, and why?
* console.log(5 > 3 && 8 > 6); true , both are true
* console.log(10 < 5 || 4 === 4); true , the last statement is true
* console.log(!(7 > 2));false, ! means 7 is not greater than 2

3. What will this code log, and why?
* console.log(Boolean(0)); false, 0 is always false
* console.log(Boolean("Hello")); NaN, it is a string
* console.log(!!undefined); false 

