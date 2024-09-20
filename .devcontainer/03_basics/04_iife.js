// Immediately Invoked Function Expression

// let our_info = {
//     name: 'Italiano Hotel',
//     address: 'Italy'
// }

// (function greet(infoAccess){
//     console.log(`Welcome to ${infoAccess.name} in ${infoAccess.address}`);
    
// })(our_info)
    
(function greet(){
    // Named IIFE
    console.log('not yet');
})();            

((name) => {
    // Unnamed IIFE
    console.log(`CONNECTED WITH ${name}`);
})('Raam')

