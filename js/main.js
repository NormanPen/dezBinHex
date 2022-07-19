let input = prompt("Geben Sie eine Dezimalzahl ein");

let number = parseInt(input);

let hex = number.toString(16);

let number2 = input;
let bin = number.toString(2);

alert(`Hexadezimal ${hex}`);
alert(`Binär ${bin}`);
