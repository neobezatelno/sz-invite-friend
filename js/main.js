// number counter 
// number counter 

const bonusText = document.querySelectorAll(".bonus-clac--num");
// const counters = document.querySelectorAll('.valuess');
const speed = 200;







const bonusRange = document.querySelector(".js-range-slider");
let activeImg = document.querySelectorAll(".range-img");
let bonusBox = document.querySelector('.bonus-calc')
bonusRange.addEventListener("input", (event) => {
  const value = Number(bonusRange.value) / 100;
  bonusRange.style.setProperty("--thumb-rotate", `${value * 10720}deg`);

  sliderAdd(parseInt(bonusRange.value));
  sliderRemove(parseInt(bonusRange.value));

  if (bonusRange.value == "0") {
    activeImg[0].style.transform = `scale(1.3)`;
    // bonusText.innerHTML = `2 000`;
    activeImg[0].classList.remove('active');

  }
  if (bonusRange.value >= "1") {
    activeImg[0].classList.add('active');
  }
});

function sliderAdd(bonusRangeValue) {
  bonusText.forEach( counter => {
    const animate = () => {
       const value = +counter.getAttribute('akhi');
       const data = +counter.innerText;
      
       const time = value / speed;
      if(data < value) {
           counter.innerText = Math.ceil(data + time);
           setTimeout(animate, 0);
         }
         else{
           counter.innerText = value;
         }
      
    }
    
    animate();
 });
  for (i = 1; i <= bonusRangeValue; i++) {
    activeImg[i].classList.add("active");
    activeImg.forEach((element) => {
      element.style.transform = `scale(0.${100 - bonusRangeValue * 2})`;
    });
    
 
   
    bonusText[0].setAttribute('akhi', `${2 * (i + 1)}000`)
    // bonusText[0].innerHTML = `ok + ${ok}`
    // bonusText.innerHTML = `${2 * (i + 1)} 000`;
    // bonusText.setAttribute('akhi', '2000')
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
