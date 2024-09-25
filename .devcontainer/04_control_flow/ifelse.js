// If else statements

// const temp = 43


// if(temp >= 40){

//     console.log('Temprature is high');
    
// }
// else{
//     console.log('Temperature is Low');
// }


// let score = 200
// if(score > 100){
//     const power  = 'fly'
//     console.log(`the power is ${power}`);
    
// }

// console.log(power);

// nested if else statements

// const balance  = 200

// if (balance <= 20){
//     console.log('the balance is 20');   
// }

// else if (balance <= 120){
//     console.log('the balance is 120');  
// }

// else if (balance == 80){
//     console.log('the balance is 80');
    
// }

// else{
//     console.log('the balance could not be found');
    
// }

const isuserloggedin = true
const userpurchasedthecourse = true
const isuserprimemember = true

// || it goes inside the if condition if one the all condition is true

// if(isuserloggedin || userpurchasedthecourse || isuserprimemember === true){
//     console.log('user can access the course');
    
// }
// else{
//     console.log('user cant access the course');
    
// }

// && it execute the if condition only if all the conditions are true

if(isuserloggedin && userpurchasedthecourse && isuserprimemember === true){
    console.log('user can access the course');      
    }
    else{
    console.log('user cant access the course');    
    }
