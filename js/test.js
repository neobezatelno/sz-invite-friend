'use static'

const bonusText = document.querySelectorAll(".bonus-calc--num");
const bonusRange = document.querySelector(".js-range-slider");
let activeImg = document.querySelectorAll(".range-img");
let inviteFriendQuantity = document.getElementById('invite-friend-qtty');
const bonusQuantity = document.getElementById("bonusQuantity");

function animateValue(bonusQuantity, start, end, duration) {
    // let inProgress = 0
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        bonusQuantity.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}
animateValue(bonusQuantity, 0, 2000, 500);

bonusRange.addEventListener("input", () => {
    const value = Number(bonusRange.value) / 100;
    bonusRange.style.setProperty("--thumb-rotate", `${value * 10720}deg`);

    sliderAdd(parseInt(bonusRange.value));
    sliderRemove(parseInt(bonusRange.value));

    if (bonusRange.value === "0") {
        activeImg[0].style.transform = `scale(1.3)`;
        bonusText.innerHTML = `2 000`;
        inviteFriendQuantity.innerHTML = `1 друга`
        activeImg[0].classList.remove('active');
        if (bonusQuantity.innerHTML !== "2000") {
            animateValue(bonusQuantity, 0, 2000, 500);
        }
    }
    if (bonusRange.value >= "1") {
        activeImg[0].classList.add('active');
        // animateValue(obj, 0, 2000, 100);
    }
});

function sliderAdd(bonusRangeValue) {
    for (let i = 1; i <= bonusRangeValue; i++) {
        activeImg[i].classList.add("active");
        activeImg.forEach((element) => {
            element.style.transform = `scale(0.${100 - bonusRangeValue * 2})`;
        });
        animateValue(bonusQuantity, 0, (2000 * (i + 1)), 500);
        inviteFriendQuantity.innerHTML = `${i + 1} друзей`
    }
}

function sliderRemove(bonusRangeValue) {
    for (let i = 6; i > bonusRangeValue; i--) {
        if (activeImg[i].classList.contains("active")) {
            activeImg[i].classList.remove("active");
        }
        activeImg[i].style.transform = `scale(0)`;
    }
}