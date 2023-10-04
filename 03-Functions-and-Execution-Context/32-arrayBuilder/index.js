const arrayBuilder = (obj) => {
    const result = []
    for (const key in obj) {
        const count = obj[key]
        for (let i = 0; i < count; i++) {
            result.push(key)
        }
    }
    return result
}

// Uncomment these to check your work!
// console.log(arrayBuilder({'cats': 2, 'dogs': 1})); // => ['cats', 'cats', 'dogs']
// console.log(arrayBuilder({})); // => []