// ADD CODE HERE
const findWaldo = (obj) => {
    return obj.hasOwnProperty('Waldo') ? obj['Waldo'] : "Where's Waldo?";
}
// Uncomment these to check your work!
// const DC = {'Bruce': 'Wayne', 'Harley': 'Quinn'}
// const supernatural = {'Sam': 'Winchester', 'Dean': 'Winchester', 'Waldo': 'unknown'}
// console.log(findWaldo(DC)) // should log: 'Where's Waldo?'
// console.log(findWaldo(supernatural)) // should log: 'unknown'