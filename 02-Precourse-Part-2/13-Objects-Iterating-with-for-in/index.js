const checkObj = {
    oddNum: 1,
    evenNum: 2,
    foundNum: 5,
    randomNum: 18
};

const objToArray = [];
// ADD CODE HERE

for (let i in checkObj) {
    if (checkObj[i] >= 2) {
        objToArray.push(checkObj[i]);
    }
}