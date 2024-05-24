/////////////////////////////////////// Optional Chaining

// ให้แก้ไขโค้ดในโจทย์ให้มีผลลัพธ์ดังนี้

// เมื่อทำการ console.log() ตัว result1 จะได้ผลลัพธ์แสดงทางหน้าจอเป็น undefined

// เมื่อทำการ console.log() ตัว result2 จะได้ผลลัพธ์แสดงทางหน้าจอเป็น English score is not defined

const employee1 = {
  name: 'John',
  age: 20
};

// const result1 = employee1.scores.english;

// Relationship with the optional chaining operator (?.)
// The nullish coalescing operator treats undefined and null as specific values. So does the optional chaining operator (?.), which is useful to access a property of an object which may be null or undefined. Combining them, you can safely access a property of an object which may be nullish and provide a default value if it is.
const result1 = employee1.scores?.english ?? 'undefined';

console.log(result1);

const employee2 = {
  name: 'A',
  age: 50,
  scores: {
    math: 40
  }
};

// Nullish coalescing operator (??)
// The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
// const result2 = employee2.scores.english;
const result2 = employee2.scores.english ?? 'English score is not defined';

console.log(result2);
