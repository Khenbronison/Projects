// QUESTION 1
// function fetchUserName() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("John Doe");
//         }, 2000);
//     });
// }

// fetchUserName()
//     .then(name => console.log(name)) 

// QUESTION 2
// function fetchData(){
//     const value = false
//     return new Promise ((resolve, reject)=>{
//         if(value){
//             resolve("Data fetched successfully")
//         }

//         else{
//             reject("Failed to fetch data")
//         }        
//     })
// }

// fetchData()
//     .then(console.log)
//     .catch(console.error)

// QUESTION 3
// function fetchUser(id) {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(id){
//                 resolve({ id, name: "Alice" })
//             }

//             else{
//                 reject(null)
//             }
//         },2000)
//     })
// }

// fetchUser(11)
//     .then(console.log)
//     .catch(console.log)

// QUESTION FOUR
// function fetchUserName() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("John Doe");
//         }, 2000);
//     });
// }

// async function logResult(){
//     const logValue = await fetchUserName()
//     console.log(logValue)
// }

// logResult()

// QUESTION FIVE
// function getUserId(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("123")
//         }, 1000)
//     })
// }

// getUserId()
//     .then(console.log)

// function getUserDetails(id){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve({id, name:"Alice"})
//         }, 2000)
//     })
// }

// getUserDetails(123)
//     .then(console.log)

// QUESTION SIX
// async function fetchData() {
//     try {
//         const value = true;
//         const result = await new Promise((resolve, reject) => {
//             if (value) {
//                 resolve("Data fetched successfully");
//             } else {
//                 reject("Failed to fetch data");
//             }
//         });

//         console.log(result); 
//     } catch (error) {
//         console.error("Error:", error);
//     }
// }

// fetchData();

// QUESTION SEVEN

// function fetchUser(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve({name:"John"})
//         },2000)
//     }) 
// }

// function fetchPosts(){
//     return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve(["Post 1", "Post 2"])
//     },3000)
// })
// }

// function fetchComments(){
//     return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve(["Comment 1", "Comment 2"])
//     },1000)
// })
// }

// Promise.all([fetchUser(),fetchPosts(),fetchComments()])
//     .then(console.log)
//     .catch(console.error)

// QUESTION 8
// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function waitAndLog() {
//     await delay(3000); 
//     console.log("Waited for 3 seconds");
// }

// waitAndLog();

// QUESTION 9
// function task1(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("Task 1 Done")
//         },2000)
//     })
// }

// function task2(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("Task 2 Done")
//         },3000)
//     })
// }

// async function task1task2(){
//   const result =  await task1()

//   console.log(result)
   
//   const result2 = await task2()
//   console.log(result2)

// }

// task1task2()

// Promise.all([task1(), task2()])
//     .then(console.log)
//     .catch(console.error)

// QUESTION 10
async function fetchData(url){
    try{
        const data = await new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(fetch(url))
            }, 2000)
        })
        console.log(data)
    }

    catch{
        console.error("Error fetching data")
    }
}

fetchData()