const fb = [];
// ADD CODE HERE

for (let i = 1; i <= 16; i++) {
    if (i % 15 === 0) {
        fb.push("fizzbuzz");
    } else if (i % 3 === 0) {
        fb.push("fizz");
    } else if (i % 5 === 0){
        fb.push("buzz");
    } else {
        fb.push(i);
    }
}

// should log: [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16]