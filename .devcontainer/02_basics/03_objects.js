// objects literlas

newSymbol = Symbol('mysymbol')

empInfo = {
    name: 'Ram',
    [newSymbol]:('mysym'),
    age: 26,
    location: 'pune',
    email:'ram@gmail.com',
    last_login: ["Monday","Tuesday"],
    isLoggedin : true,
    'post name': 'Junior developer'
}
console.log(empInfo);
console.log(empInfo.name);
console.log(empInfo['age']);
console.log(empInfo['post name']);
console.log(empInfo[newSymbol]);

empInfo.location = 'mumbai'
console.log(empInfo);

Object.freeze(empInfo)
empInfo.isLoggedin = false
console.log(empInfo)

empInfo.greetings = function(){
    console.log('hello ram')
}

console.log(empInfo.greetings)

empInfo.personalgreeting = function(){
    console.log(`Hello ${this.name}`)
}
console.log(empInfo.personalgreeting())
