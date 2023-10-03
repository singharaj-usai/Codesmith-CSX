const disemvowel = (string) => {
    const vowels = "aeiouAEIOU";
    let result = "";

    for (let i = 0; i < string.length; i++) {
        if (!vowels.includes(string[i])) {
            result += string[i];
        }
    }
    return result;
}

// Uncomment these to check your work!
// console.log(disemvowel('CodeSmith')); // => 'CdSmth'
// console.log(disemvowel('BANANA')); // => 'BNN'
// console.log(disemvowel('hello world')); // => 'hll wrld'