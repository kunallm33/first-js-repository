const day = 4

switch (day) {
    case 1:
        console.log('mon');
        break;          // the break if used to stop fetcing operation , if we dont write the break statement then it affect the next condition
    case 2:
        console.log('tue');
        break;
    case 3:
        console.log('wed');
        break;
    case 4:
        console.log('thu');
        break;
    case 5:
        console.log('fri');
        break;
    case 6:
        console.log('sat');
        break;
    case 7:
        console.log('sun');
        break;  
    
    default:
        console.log('theres no day of a week');
        break;
}