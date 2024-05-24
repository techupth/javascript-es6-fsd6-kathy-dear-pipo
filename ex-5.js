function sum(...input) {
  // Start coding here !

let arrayInput = [...input];
let total = 0;
for (let index = 0; index < arrayInput.length; index++) {
    total += arrayInput[index];
    
}
return total;
}

let result1 = sum(1, 2, 3, 4, 5, 6, 7, 8);
let result2 = sum(1, 2, 3, 4);

console.log(`Result ${result1}`);
console.log(`Result ${result2}`);
