// console.log("start");
// setTimeout(() => {
//     console.log("delayed by 2 mins")
// }, 2000);
// console.log("end");

// // callback --> execute the function within another funtion

// function hello(callback){
//     console.log("good mornimg");
//     callback();

// }
// function hai(callback){
//     console.log("byr bye");
//     callback();
// }

// function hh(callback){
//     console.log("good afternoon")
//     callback();
// }
// function gg(){
//     console.log("bye bye")
// }

// hello(()=>{
//     hai(()=>{
//         hh(()=>{
//             gg()
//         })
//     })
// })




// Class --> It is a bluprint that contains methods and objects

// class JSClass {
//     setName(name1){
//         this.name = name1;
//     }
//   setAge(age1){
//       this.age= age1;
//   }
// printing(){
//     console.log(`My name is ${this.name} 
// My age is ${this.age}`)
// }
// }

// const per = new JSClass();
// per.setName("nithees");
// per.setAge(23);
// per.printing();




// Promise --> It is an object that handles asynchronous operation in  synchronous way
// .then --> to call resolve
// .catch --> to call reject
// let myPro = new Promise((resolve,reject)=>{
//     let success = false;
//     if(success){
//         resolve("passed");
//     }
//     else{
//         reject("failed");
//     }
// })

// myPro
// .then((value)=>{
//    console.log(value);
// })
// .catch((error)=>{
//     console.log(error);
    
// });

// function task1(){
//     return new Promise((resolve)=>{
//        setTimeout(() => {
//         resolve('task 1 completed')
//        }, 4000);
//     })
// }

// function task2(){
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//          resolve('task 2 completed')
//         }, 3000);
//      })
// }
// function task3(){
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//          resolve('task 3 completed')
//         }, 2000);
//      })
// }

// task1()
//     .then((value)=>{
//         console.log(value);return task2()
//     })
//     .then((value)=>{
//         console.log(value);return task3()
//     })
//     .then((value)=>{
//         console.log(value);
//     })



    const p1 = Promise.resolve('Promise 1')
    const p2 = new Promise((resolve)=>{
        setTimeout(() => {
            resolve('Promise 2')
        },2000);
    })
    const p3 = Promise.resolve('Promise 3')

    Promise.all([p1,p2,p3])
    .then((value)=>{
        console.log(value)
    })