// Singleton Object

// let new_obj = new Object

// non-singleton Object

let new_obj = {}


new_obj.id = 'x@1971'
new_obj.name = 'kunal'
new_obj.age = 19

// console.log(new_obj);


const another_user = {
    details:{
        full_name:{
            fname:'akshay',
            lname: 'kumar'
        },
        age:19,
        business: 'web services'
    }
}

console.log(another_user.details.full_name.lname);
// console.log(another_user[details[age]])

const obj1 = {1:'er',2:'bn'}
const obj2 = {3:'gh',4:'as'}

// const obj3 = {obj1,obj2}    //it will return both the objects not there elements

// const obj3 = Object.assign(obj1,obj2)
// const obj4 = Object.assign({},obj1,obj2)    //good practice
// console.log(obj4);

const obj3 = {...obj1,...obj2}
console.log(obj3);

let arr = [
    {
        id:1,
        email:'a@gmail.com'
    },
    {
        id:2,
        email:'b@gmail.com'
    },
    {
        id:3,
        email:'c@gmail.com'
    }
]
console.log(arr[2].email)
console.log(new_obj);

console.log(Object.keys(new_obj));
console.log(Object.values(new_obj));

console.log(Object.entries(new_obj));
console.log(new_obj.hasOwnProperty('email'));

