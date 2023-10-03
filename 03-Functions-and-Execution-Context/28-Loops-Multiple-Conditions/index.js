const addingAllTheWeirdStuff = (array1, array2) => {
    let odd = 0;
    let even = 0;

    for (const num of array2) {
        if (num % 2 === 0) {
            even += num;
        } else {
            odd += num;
        }
    }

    for (let i = 0; i < array1.length; i++) {
        if (array1[i] < 10) {
            array1[i] += odd;
        } else if (array1[i] > 10) {
            array1[i] += even;
        }
    }
    if (array2.some((num) => num > 20)) {
        array1 = array1.map((num) => num + 1);
    }

    return array1;
};

// Uncomment these to check your work!
// console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5])); // expected log [10, 12, 14, 23, 21]
// console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22])); // expected log [11, 13, 15, 46, 44, 11]
