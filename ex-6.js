/////////////////////////////////////////// Nullish Coalescing

// ให้ Declare ตัว Function โดยมีรายละเอียดดังนี้

// รับ Parameter 1 ตัว ในที่นี้คือ height
// Function นี้จะตรวจสอบ Parameter นั้นว่าเป็น undefined หรือไม่ด้วยวิธี Nullish Coalescing
// Return ผลลัพธ์เป็น “Height is not defined” กรณีที่ Parameter นั้นเป็น undefined

let height = undefined;
let result;

// 1. ใช้ Nullish Coalescing ตรวจสอบว่าเป็น undefined รึป่าว กำหนด function รับ parameter 1 ตัว คือ Height
// คืนค่าเป็น string “Height is not defined” ถ้า Parameter นั้นเป็น undefined

// function checkUndefined(string) {
//   return string ?? `Height is not defined`;
// }

// result = checkUndefined(height);

result = height ?? `Height is not defined`;

console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
