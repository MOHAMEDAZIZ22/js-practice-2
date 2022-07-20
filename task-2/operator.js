var a = parseInt(prompt("Enter a number"));
var b = parseInt(prompt("Enter a number"));
var op = prompt("enter the operator");
switch(op) 
{
    case '+':
        console.log("result:", (a + b));
        break;
    case '-':
        console.log("result:", (a - b));
        beark;
    case '*':
        console.log("result:", (a * b));
        break;
    case '/':
        console.log("result:", (a / b));
        break;
    default:
        console.log("plese enter a number:)");
}
