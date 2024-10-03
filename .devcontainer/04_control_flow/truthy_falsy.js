// const username = 0

// if(username){
//     console.log(`the username is: ${username}`);
// }
// else{
//     console.log('cant fetch the username');

// }

// Falsy values:

// false, 0, -0, BigInt 0n, '', null, undefined, Nan

// Truthy values:
// '0', 'false', ' ', [], {}, function(){}

const emt_arr = []

if (emt_arr.length === 0) {
    console.log('Array is empty');
    
}

const emt_object = {}
if(Object.keys(emt_object).length === 0){
    console.log('object is empty');
}

// nullish coalescing operator
// it firstly check if the first value is undefined or null, if its undefined
// then it returns other value even if that value is null or undefied
// When we write 3 or more values then it returns the first not null or not undefined value
const val = null

// const showval = val ?? null
const showval = val ?? undefined ?? 12

console.log(showval);   

// ternary operator

const isAdult = 17 
isAdult >= 18 ? console.log('isAdult'): console.log('notAdult');


