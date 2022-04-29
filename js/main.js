const bonusRange = document.querySelector(".js-range-slider");
const bonusText = document.getElementById("bonus-clac--num");
let activeImg = document.querySelectorAll(".range-img");
let bonusBox = document.querySelector('.bonus-calc')
bonusRange.addEventListener("input", (event) => {
  const value = Number(bonusRange.value) / 100;
  bonusRange.style.setProperty("--thumb-rotate", `${value * 10720}deg`);

  sliderAdd(parseInt(bonusRange.value));
  sliderRemove(parseInt(bonusRange.value));

  if (bonusRange.value == "0") {
    activeImg[0].style.transform = `scale(1.3)`;
    bonusText.innerHTML = `2 000`;
    activeImg[0].classList.remove('active');

  }
  if (bonusRange.value >= "1") {
    activeImg[0].classList.add('active');
  }
});

function sliderAdd(bonusRangeValue) {
  for (i = 1; i <= bonusRangeValue; i++) {
    activeImg[i].classList.add("active");
    activeImg.forEach((element) => {
      element.style.transform = `scale(0.${100 - bonusRangeValue * 2})`;
    });
    bonusText.innerHTML = `${2 * (i + 1)} 000`;
    // bonusBox.innerHTML += '<img src="img/bonus.svg" alt="">';
  }
}

function sliderRemove(bonusRangeValue) {
  for (i = 6; i > bonusRangeValue; i--) {
    if (activeImg[i].classList.contains("active")) {
      activeImg[i].classList.remove("active");
    }
    activeImg[i].style.transform = `scale(0)`;
    // bonusBox.innerHTML--
  }
}
