const sumMe = {
    hello: 'there',
    you: 8,
    are: 7,
    almost: '10',
    done: '!'
};
let total = 0;
// ADD CODE HERE
for (let i in sumMe) {
    if (typeof sumMe[i] === "number") {
        total += sumMe[i];
    }
}