var c = 300
if(true){
    let a = 10
    const b = 150
    var c = 200
    // console.log('Inner', a);
    
}


// console.log(c);
let a = 100
// console.log('Outer',a);

function one(){
    let name = 'raam'
    function two(){
        let another_name  = 'shyam'
        console.log(name);
      
    }
    // console.log(another_name);
    // two()
    
}
// one()

if(true){
    let anothername = "jimmy's"
    if(anothername == "jimmy's"){
       const website = ' youtube'
        // console.log(anothername+website)
    }
    // console.log(website);
    
}
// console.log(anothername)

addOne(3)
function addOne(num){
    return num+1
}

addTwo(3)
const addTwo = function(num){
    return num+2
}