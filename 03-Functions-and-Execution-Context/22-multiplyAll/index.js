// ADD CODE HERE
const multiplyAll = (...args) => {
    if (args.length === 0) {
        return 1;
    }

    let result = 1;
    for (const num of args) {
        result *= num;
    }
    return result;
};


// Uncomment these to check your work!
// console.log(multiplyAll(9, 4, 5, 6, 7, 2, 1, 8, 3)) // should log: 362880
// console.log(multiplyAll(5, 5, 5, 3)) // should log: 375