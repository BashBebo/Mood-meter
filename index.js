let Moodscore = 0;

const CheerUp = document.getElementById("Increase");
const Calmdown = document.getElementById("Decrease");
const ResetMood = document.getElementById("Reset");
const MoodScore = document.getElementById("Moodscore");

function updateMoodScore() {
    let emoji = "😐";
    if (Moodscore > 0) {
        emoji = "🙂"
    }
    else if (Moodscore < 0) {
        emoji = "☹️"
    }

    MoodScore.textContent = Moodscore + "" + emoji;
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


