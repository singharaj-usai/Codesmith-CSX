const closestToTheMark = (player1, player2) => {
    const theMark = Math.floor(Math.random() * 100);
    console.log(`If theMark is ${theMark}...`);;

    const diff1 = Math.abs(player1 - theMark);
    const diff2 = Math.abs(player2 - theMark);

    if (diff1 < diff2) {
        return "Player 1 is closest";
    } else if (diff1 < diff2) {
        return "Player 2 is closest";
    } else {
        return "Both players are equally close";
    }
};

// Uncomment the line below to check your work!
// console.log(closestToTheMark(25, 75));
