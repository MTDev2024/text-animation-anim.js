const titleH1 = document.querySelector("h1");
const lettersH1 = [...document.querySelectorAll("h1 span")];

const titleH2 = document.querySelector("h2");
const lettersH2 = [...document.querySelectorAll("h2 span")];

titleH1.addEventListener("mouseenter", () => handleLetters(lettersH1, "h1 span"));
titleH1.addEventListener("mouseleave", () => handleLetters(lettersH1, "h1 span"));

titleH2.addEventListener("mouseenter", () => handleLetters(lettersH2, "h2 span"));
titleH2.addEventListener("mouseleave", () => handleLetters(lettersH2, "h2 span"));

let isAnimatingIn = false;
let calledOut = false;
let animOpened = false;

function handleLetters(letters, target) {
    if (animOpened) {
        animOut(target);
    }
    if (isAnimatingIn) {
        calledOut = true;
        return;
    }

    isAnimatingIn = true;

    const animPromise = new Promise((resolve) => {
        animIn(target);
        setTimeout(() => {
            resolve();
        }, 750);
    });

    animPromise.then(() => {
        isAnimatingIn = false;
        if (calledOut) {
            animOut(target);
            calledOut = false;
        } else if (!calledOut) {
            animOpened = true;
        }
    });
}

function animIn(target) {
    anime({
        targets: target,
        translateX: function () {
            return anime.random(-250, 250);
        },
        translateY: function () {
            return anime.random(-250, 250);
        },
        translateZ: function () {
            return anime.random(-2000, 750);
        },
        rotate: function () {
            return anime.random(-250, 250);
        },
        easing: "easeOutCirc",
        duration: 750,
    });
}

function animOut(target) {
    anime({
        targets: target,
        translateX: 0,
        translateY: 0,
        translateZ: 0,
        rotate: 0,
        easing: "easeInQuad",
        duration: 750,
    });
}
