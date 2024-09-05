

function myName(){
    console.log('k');
    console.log('u');
    console.log('n');
    console.log('a');
    console.log('l');
}

// myName()

function add(num1,num2){
    // console.log(num1+num2);
    let result = num1+num2
    // let multi = num1*num2

    return result
}

// add(2,6)

// my_result  = add(2,6)
// console.log(my_result);
// console.log(add(3,5))

function login(user = 'sam'){
    if(//user === undefined
        !user
    ){
        console.log('Please enter a username...');
        return
    }
    return `${user} just logged in`
}

// console.log(login('Ram'))
// console.log(login())

// Rest operators inside function parameters
// Returns all the argumetns within a array

function calculateCartPrice(val1, val2,...val){
    return val
}
// console.log(calculateCartPrice(23,2,45,80));

let userInfo = {
    uname: 'raam',
    age: 19
}

function printInfo(anyObject){
    console.log(`username is ${anyObject.uname} and the age is ${anyObject.age}`);
    // return anyObject
} 

printInfo(userInfo)

printInfo({
    uname:'Johhn',
    age:19
})

let new_arr =[
    222,33,444,55,8888
]

function arrreturn(my_array){
    return my_array[2]
}
console.log(arrreturn(new_arr))
console.log(arrreturn([222,33,444,55,8888]))
