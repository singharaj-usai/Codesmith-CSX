const mergingTripletsAndQuints = (array1, array2) => {
    if (array1.length !== array2.length) {
        throw Error("Arrays must have the same length");
    }
    return array1.map((num1, index) => {
        if (num1 % 3 === 0 || num1 % 5 === 0) {
            return num1 + array2[index];
        } else {
            return num1;
        }
    });
};

// Uncomment these to check your work!
// console.log(mergingTripletsAndQuints([1, 2, 3, 4, 5, 15], [1, 3, 6, 7, 8, 9])); // expected log [1, 2, 9, 4, 13, 24]
// console.log(mergingTripletsAndQuints([1, 1, 3, 9, 5, 15], [1, 2, 3, 4, 5, 6])); // expected log [1, 1, 6, 13, 10, 21]