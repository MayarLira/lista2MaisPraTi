let num1 = 1, num2 = 1;

console.log(num1);
console.log(num2);

for(let i = 3; i <= 10; i++){
    let fibonacci = num1 + num2;
    console.log(fibonacci);
    num1 = num2;
    num2 = fibonacci;
}