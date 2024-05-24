function sum(...number) {
  // Start coding here !
  console.log(...number);
  let result = 0;
  for (let num of number) {
    console.log(num);
    result += num;
  }
  return result;
}

let result1 = sum(1, 2, 3, 4, 5, 6, 7, 8);
let result2 = sum(1, 2, 3, 4);

console.log(`Result ${result1}`);
console.log(`Result ${result2}`);
