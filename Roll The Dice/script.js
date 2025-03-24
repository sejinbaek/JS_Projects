let images = ["img/dice-01.svg",
    "img/dice-02.svg", 
    "img/dice-03.svg", 
    "img/dice-04.svg",
    "img/dice-05.svg",
    "img/dice-06.svg"
];

let dice = document.querySelectorAll("img");

function roll() {
    dice.forEach(function(die) {
        die.classList.add("shake");
    });
    setTimeout(function() {
        dice.forEach(function(die) {
            die.classList.remove("shake");
        });
        let dieOneValue = Math.floor((Math.random()*6));
        let dieTwoValue = Math.floor((Math.random()*6));
        document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
        document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
        document.querySelector("#total").textContent = "너의 주사위 합은 " + ((dieOneValue + 1) + (dieTwoValue + 1));

    }, 1000);
}

document.querySelector("#roll-button").addEventListener("click", () => {
    roll();
});
