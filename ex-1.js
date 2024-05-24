let studentProfile = {
  name: 'John',
  age: 20,
  scores: {
    thai: 40
  }
};

let additionalProperties = {
  photo: 'https://placedog.net/500',
  hobbies: ['Football', 'Coding']
};

// ให้เขียนโปรแกรมรวม Object studentProfile และ additionalProperties เข้าด้วยกัน
// เมื่อโปรแกรมทำงานสำเร็จ ควรจะแสดงผลลัพธ์ทางหน้าจอแบบนี้
// {
//   name: 'John',
//   age: 20,
//   scores: { thai: 40 },
//   photo: 'https://placedog.net/500',
//   hobbies: [ 'Football', 'Coding' ]
// }

// Start coding here

// 1. กำหนดค่าตัวแปร เป็น Object เพื่อรวม 2 object เข้าด้วยกัน
// 2. แสดงผลลัพธ์

let newStudentProfile = { ...studentProfile, ...additionalProperties };

console.log(newStudentProfile);
