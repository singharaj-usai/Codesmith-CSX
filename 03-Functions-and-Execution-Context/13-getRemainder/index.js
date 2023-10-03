const getRemainder = (num1, num2) => {
    const largeNum = Math.max(num1, num2);
    const smallerNum = Math.min(num1, num2);
    return largeNum % smallerNum;
};

// Uncomment the lines below to test your code
// console.log(getRemainder(17, 5)); // => 2
// console.log(getRemainder(20, 5)); // => 0
// console.log(getRemainder(8, 22)); // => 6
// console.log(getRemainder(7, 42)); // => 0