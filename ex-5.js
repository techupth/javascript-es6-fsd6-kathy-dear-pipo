/////////////////////////////////////// Rest Operators

// ให้ Declare ตัว Function ที่ชื่อว่า sum โดยมีรายละเอียดดังนี้

// รับ Parameter เป็นตัวเลขเข้ามากี่ตัวก็ได้
// Return ออกไปเป็นผลรวมของตัวเลขที่ส่งเข้ามาจาก Parameter ทั้งหมด

function sum(...input) {
  // Start coding here !

  // 1. กำหนดตัวแปร arrayInput เป็น array เพื่อรับค่า input ที่เป็นตัวเลข
  // 2. กำหนดตัวแปร sumTotal เป็น number เพื่อเก็บ ผลรวมของตัวเลข
  // 3. ใช้ for loop เพื่อรวมตัวเลขที่ส่งเข้ามาใน ฟังก์ชัน ทีละตัว
  // 4. return ค่า sumTotal

  let arrayInput = [...input];
  let sumTotal = 0;
  for (let i = 0; i < arrayInput.length; i++) {
    sumTotal += arrayInput[i];
  }

  return sumTotal;
}

let result1 = sum(1, 2, 3, 4, 5, 6, 7, 8);
let result2 = sum(1, 2, 3, 4);

console.log(`Result ${result1}`); // Result 36
console.log(`Result ${result2}`); // Result 10
