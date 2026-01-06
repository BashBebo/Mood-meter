// Memory 
let Moodscore = 0; // reassignable variable for later use just setting the record

const CheerUp = document.getElementById("Increase");
const Calmdown = document.getElementById("Decrease");
const ResetMood = document.getElementById("Reset");
const MoodScore = document.getElementById("Moodscore");
// A NON resassinable variable used to create variables from Ids

function updateMoodScore() { // A simple fuction to make a variable for emoji and give me commands based on which number
    let emoji = "😐";
    if (Moodscore >= 10) {
        emoji = "🤩"  
    }
    else if (Moodscore >= 5) {
        emoji = "😄"
    }
    else if (Moodscore > 0) {
        emoji = "🙂"
    }
    else if (Moodscore <= -10) {
        emoji = "😭"
    }
    
    else if (Moodscore <= -5) {
        emoji = "😢"
    }
    else if (Moodscore < 0) {
        emoji = "☹️"
    }
    else if (Moodscore = 0) {
        emoji = "😐"
    }

    MoodScore.textContent = Moodscore + " " + emoji; // and here is that the MoodScore on the html page it will show Mood score on the html page as moodscore
} 

function MoodIncrease () {
    Moodscore++;
    document.getElementById("Box").style.backgroundColor = "Green";
    updateMoodScore();
}

function MoodDecrease () {
    Moodscore--;
    document.getElementById("Box").style.backgroundColor = "Red";
    updateMoodScore();
}

function MoodReset () {
    Moodscore = 0;
    document.getElementById("Box").style.backgroundColor = "Gray";
    updateMoodScore();
}

CheerUp.addEventListener("click", MoodIncrease);
Calmdown.addEventListener("click", MoodDecrease);
ResetMood.addEventListener("click", MoodReset);


