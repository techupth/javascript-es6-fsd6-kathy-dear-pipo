let studentProfile = {
  name: 'John',
  age: 20,
  scores: {
    thai: 40
  }
};

let studentScores = {
  math: 30,
  english: 70,
  tech: 100
};

// ให้เขียนโปรแกรมรวม Object studentProfile และ studentScores เข้าด้วยกัน โดยใช้ Spread Operator
// เมื่อโปรแกรมทำงานสำเร็จ ควรจะแสดงผลลัพธ์ทางหน้าจอแบบนี
// {
//   name: 'John',
//   age: 20,
//   scores: { thai: 40, math: 30, english: 70, tech: 100 }
// }

// Start coding here

// 1. กำหนดตัวแปรเป็น Object เพื่อรวม 2 object เข้าด้วยกัน
// 2. แสดงผลลัพธ์

let newStudentProfile = {
  ...studentProfile,
  scores: { ...studentProfile.scores, ...studentScores }
};

console.log(newStudentProfile);
