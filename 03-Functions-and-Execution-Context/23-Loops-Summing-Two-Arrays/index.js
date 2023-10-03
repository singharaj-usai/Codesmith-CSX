const mergingElements = (array1, array2) => {
    if (array1.length !== array2.length) {
        throw Error("Arrays must have the same length");
    }
    return array1.map((num1, index) => num1 + array2[index]);
};

// Uncomment these to check your work!
// console.log(mergingElements([1, 2, 3, 4], [5, 6, 7, 8])); // expected log [6, 8, 10, 12]
// console.log(mergingElements([7, 3, 6, 0], [3, 9, 17, 81])); // expected log [10, 12, 23, 81]