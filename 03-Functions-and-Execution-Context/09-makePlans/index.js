let friendsAvailable = true;

const makePlans = (name) => callFriend(friendsAvailable, name);

const callFriend = (bool, name) =>
    bool? `Plans made with ${name} this weekend` : 'Everyone is busy this weekend';
// Uncomment these to check your work!
// console.log(makePlans("Mary")) // should return: "Plans made with Mary this weekend'
// friendsAvailable = false;
// console.log(makePlans("James")) //should return: "Everyone is busy this weekend."
