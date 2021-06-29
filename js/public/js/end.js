let userNames = localStorage.getItem("name");
let userScores = localStorage.getItem("score");

document.getElementById("userName").innerHTML =`Congrats ${userNames}`;
if(userScores==null){
    document.getElementById("userScore").innerHTML =`Your score is 0, Need improvement`;
}
else{
    document.getElementById("userScore").innerHTML =`Your score is ${userScores}`;
}

document.getElementById("restart").addEventListener('click' , () => {
    window.localStorage.clear();
    location.href = "intro.html"
})
