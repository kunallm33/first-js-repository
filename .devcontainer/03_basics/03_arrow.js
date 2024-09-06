let user = {
    username : 'raam',
    password:'raam@123',

    welcoming:function(){
        console.log(`${this.username} just logged in`);
        // console.log(this)
    }
}
// console.log(user.username)
// user.welcoming()
// console.log(this);
// user.username = 'shyam'
// user.welcoming()

// function x(){
//     let username = 'xyz'
//     console.log(this.username)
// }
// x()

// let x = function(){
//     let username = 'xyz'
//     console.log(this.username)
// }
// x()

// arrow function
let x  = () => {
    let username = 'xyz'
    console.log(this.username)
}
x()

// // normal arrow function
// let add = (num1,num2) =>{
//     return num1+num2

// }
// console.log(add(23,45));

// implicit arrow function
let add = (num1,num2) =>    num1+num2

console.log(add(23,45));

// another implicit 

let show_name = () => ({user : 'raam'})
console.log((show_name()));
