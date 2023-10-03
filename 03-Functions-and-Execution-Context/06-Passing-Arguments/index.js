const x = 3;

const isX1 = (num) => {
    const x = 5;
    return num === x;
}

const isX2 = (num) => num === x;

const one = isX1(5);
const two = isX2(3);

// Uncomment these to check your work!
// console.log(one); // should log: true
// console.log(two); // should log: true
