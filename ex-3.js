let orders = [
  { orderId: 'A001', paymentType: 'Cash', totalPrice: 2500 },
  { orderId: 'A002', paymentType: 'Credit Card', totalPrice: 4000 },
  { orderId: 'A003', paymentType: 'Credit Card', totalPrice: 6000 }
];

let additionalOrders = [
  { orderId: 'A004', paymentType: 'Credit Card', totalPrice: 611000 },
  { orderId: 'A005', paymentType: 'Credit Card', totalPrice: 45000 }
];

// ให้เขียนโปรแกรมรวม Object orders และ additionalOrders เข้าด้วยกัน
// เมื่อโปรแกรมทำงานสำเร็จ ควรจะแสดงผลลัพธ์ทางหน้าจอแบบนี
// [
//   {
//     orderId: "A001",
//     paymentType: "Cash",
//     totalPrice: 2500,
//   },
//   {
//     orderId: "A002",
//     paymentType: "Credit Card",
//     totalPrice: 4000,
//   },
//   {
//     orderId: "A003",
//     paymentType: "Credit Card",
//     totalPrice: 6000,
//   },
//   {
//     orderId: "A004",
//     paymentType: "Credit Card",
//     totalPrice: 611000,
//   },
//   {
//     orderId: "A005",
//     paymentType: "Credit Card",
//     totalPrice: 45000,
//   },
// ];

// Start coding here

// 1. กำหนดตัวแปรเป็น array เพื่อรวม 2 array เข้าด้วยกัน
// 2. แสดงผลลัพธ์

let newOrders = [...orders, ...additionalOrders];

console.log(newOrders);
