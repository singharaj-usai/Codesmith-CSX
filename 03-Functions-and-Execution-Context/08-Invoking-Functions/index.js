let calls = "";

const jerry = (str) => (str += "Jerry") && kramer(str);

const george = (str) => (str += "George") && elaine(str);

const elaine = (str) => (str += "Elaine") && jerry(str);

const kramer = (str) => (str += "Kramer") && george(str);


// Uncomment these to check your work!
// calls = jerry(calls);
// console.log(calls); // should log: 'JerryKramerGeorgeElaine'