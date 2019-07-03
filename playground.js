// Passed by value
// -- String
// -- Number
const intNumber = 10;
const str = "Im a string";

// Passed by reference
// -- Objects
// -- Arrays
const obj = {
  name: "Eduardo Pedroso",
  email: "drdpedroso@gmail.com",
  githubUser: "@drdpedroso"
};
const arr = [1, 2, 3, 4];

const fn = value => {
  value = value + 10;
  return value;
};

console.log(intNumber);
const returnedValue = fn(intNumber);
console.log(intNumber);
console.log(returnedValue);
