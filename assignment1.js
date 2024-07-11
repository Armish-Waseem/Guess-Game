let randomnum = Math.floor (Math.random()*100)+1
// console.log(randomnum);
let userGues = prompt("Guess a number between 1 to 100");
if (Number(userGues) > randomnum){
    console.log("Is Too High");
}else if(Number(userGues) < randomnum) {
    console.log("Is Too Low")
} else if(Number(userGues) === randomnum){
    console.log("Is Correct, Congratulate!")
} else {
    let userGues=prommpt("try again");
    console.log("You Loss");
}