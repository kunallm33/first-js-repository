

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

console.log(login('Ram'))
console.log(login())
