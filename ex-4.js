let studentProfile = {
  name: 'John',
  age: 20,
  scores: {
    thai: 40
  },
  hobbies: ['Football', 'Coding']
};

let additionalHobbies = ['Painting', 'Yoga'];

/////////////////////// Merging Nested Array

// ให้สร้าง Variable ชื่อ newStudentProfile เป็น Object มีรายละเอียดดังนี้
// Property ของ Object newStudentProfile จะต้องมี Property ของ studentProfile ทั้งหมด
// ใน Property hobbies ของ Object newStudentProfile จะมี Value ของ Array additionalHobbies เพิ่มเข้าไปด้วยโดยใช้ Spread Operator
// เมื่อทำการแสดงผลค่าของ newStudentProfile ออกมาดูทางหน้าจอด้วย console.log() จะต้องได้ผลลัพธ์ออกมาเป็นแบบนี้
// {
//   name: 'John',
//   age: 20,
//   scores: { thai: 40 },
//   hobbies: [ 'Football', 'Coding', 'Painting', 'Yoga']
// }

// Start coding here

// 1.กำหนดตัวแปรเป็น object เพื่อรวม array เข้าไปใน object
// 2.แสดงผลลัพธ์

let newStudentProfile = {
  ...studentProfile,
  hobbies: [...studentProfile.hobbies, ...additionalHobbies]
};

console.log(newStudentProfile);
