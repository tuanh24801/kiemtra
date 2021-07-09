//1.
// let str_input = prompt("Enter String: ");
// // console.log(str_input.length);
// let str_out = "";
// for (let i = str_input.length -1 ; i >= 0; i--) {
//     str_out += str_input[i];
//     // console.log(str_input[i]);
// }
// console.log(str_out);

//2.
// let str = prompt("Enter String: ");
// let strsplit = str.split(" ");
// let str_out = "";
// for (let i = 0; i < strsplit.length; i++) {
//     str_out += strsplit[i].charAt(0).toUpperCase();
//     for (let j = 1; j < strsplit[i].length; j++) {
//         str_out += strsplit[i].charAt(j);
//     }
//     str_out += " ";
    
// }
// console.log(str_out);



//3.
// let Arr  =[1,2,3,3,4,5,4,4,4,5,5];
// function delete1(arr) {
//     var newArr = []
//     for (var i = 0; i < arr.length; i++) {
//       if (newArr.indexOf(arr[i]) === -1) {
//         newArr.push(arr[i])
//       }
//     }
//     return newArr;
// }
// console.log(delete1(Arr));

//4.
// let listNV= [{
//     name : "Tuan Anh",
//     age : "32",
//     salary : 9000,
//     chucVu : "GD",
// },{
//     name : "Tuan Bo",
//     age : "19",
//     salary : 8000,
//     chucVu : "NV",
// },{
//     name : "Tuan Con",
//     age : "18",
//     salary : 4000,
//     chucVu : "NV",
// }
// ];

// let userChoose = true
// while(userChoose)
// {
//     let userChoose = prompt("Enter your command (Creat, Delete, Update, Read) | E.Exit");
//     if(userChoose == "Creat"){
//         let newTask = [];
//         newTask.name = prompt("Enter new name:");
//         newTask.age = prompt("Enter new age:");
//         newTask.salary = prompt("Enter new salary:");
//         newTask.chucVu = prompt("Enter new chucVu:");
//         listNV.push(newTask);
//         console.clear();
//         i = 1;
//         for (const key in listNV) {
//             console.log(i + ". " + listNV[key].name);
//             console.log("   Age: " + listNV[key].age);
//             console.log("   Salary: " + listNV[key].salary);
//             console.log("   Chuc bu: " + listNV[key].chucVu);
//             i++;    
//         }
//     }
//     else if(userChoose == "Update")
//     {
//         let Position= prompt("Enter position:");
//         let newName= prompt("Enter new Name:");
//         let newAge= prompt("Enter new Age:");
//         let newSalary= prompt("Enter new Salary:");
//         let newChucVu= prompt("Enter new Chuc vu:");
//         listNV[Position - 1].name = newName;
//         listNV[Position - 1].age = newAge;
//         listNV[Position - 1].salary = newSalary;
//         listNV[Position - 1].chucVu = newChucVu;
//         console.clear();
//         i = 1;
//         for (const key in listNV) {
//             console.log(i + ". " + listNV[key].name);
//             console.log("   Age: " + listNV[key].age);
//             console.log("   Salary: " + listNV[key].salary);
//             console.log("   Chuc bu: " + listNV[key].chucVu);
//             i++;    
//         }
//     }
//     else if(userChoose == "Read"){
//         console.clear();
//         for (const key in listNV) {
//             console.table(listNV[key]);
//         }

//     }
//     else if(userChoose == "Delete")
//     {
//         let Position3 = prompt("Enter position:");
//         delete listNV[Position3 - 1];
//         console.clear();
//         i = 1;
//         for (const key in listNV) {
//             console.log(i + ". " + listNV[key].name);
//             console.log("   Age: " + listNV[key].age);
//             console.log("   Salary: " + listNV[key].salary);
//             console.log("   Chuc bu: " + listNV[key].chucVu);
//             i++;    
//         }
//     }
//     else if(userChoose == "E")
//         break;

// }

//5.