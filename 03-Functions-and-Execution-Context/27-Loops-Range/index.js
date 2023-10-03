const getTheRange = (arr) => {
    if (arr.length === 0) {
        return [null, null, 0];
    }
    let low = arr[0];
    let high = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < low) {
            low = arr[i];
        }
        if (arr[i] > high) {
            high = arr[i];
        }
    }

    const range = high - low;
    return [low, high, range];
};

// Uncomment these to check your work!
// console.log(getTheRange([3, 2, 5, 4, 7, 9, 10])); // expect log [2, 10, 8]