//Q40: Use for-loop to console log square numbers from 1 to 10.
for (let i = 1; i < 101; i++) {
    for (let j = 1; j < 101; j++) {
        if(j**2 === i) {
            console.log(i);
        }
    }
}

// //Q41: Write a function with input (argument) is an array, output (return) is one element from input with age is 21. Test with above array.
// const data = [
//   {
//     id: 1,
//     name: "A",
//     age: 20,
//   },
//   {
//     id: 2,
//     name: "B",
//     age: 21,
//   },
//   {
//     id: 3,
//     name: "C",
//     age: 22,
//   },
// ];


// const data21 = data.filter((i) => {
//     return i.age === 21;
// });
// console.log(data21[0]);

// //Q42: Write a function with input (argument) is an array, converts this array into json format and saves to db.json file. Test with above array.
// const users = {};
// const fs = require('fs');

// users.JSONdata = () => {
//     dataArr = JSON.stringify(data);
//     fs.writeFileSync('db.json', dataArr);
// };

// module.exports = users;

