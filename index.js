const homeScoreElement = document.getElementById("home_score");
const guestScoreElement = document.getElementById("guest_score");

const homeAddOne = document.getElementById("one");
const homeAddTwo = document.getElementById("two");
const homeAddThree = document.getElementById("three");

const guestAddOne = document.getElementById("guest_one");
const guestAddTwo = document.getElementById("guest_two");
const guestAddThree = document.getElementById("guest_three");

function addScore(element, amount) {
    let score = Number(element.textContent);
    element.textContent = score + amount;
}

homeAddOne.addEventListener("click", () => addScore(homeScoreElement, 1));
homeAddTwo.addEventListener("click", () => addScore(homeScoreElement, 2));
homeAddThree.addEventListener("click", () => addScore(homeScoreElement, 3));

guestAddOne.addEventListener("click", () => addScore(guestScoreElement, 1));
guestAddTwo.addEventListener("click", () => addScore(guestScoreElement, 2));
guestAddThree.addEventListener("click", () => addScore(guestScoreElement, 3));