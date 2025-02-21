const planetLeft = document.querySelector("#planet_left");
const planetRight = document.querySelector("#planet_right");
const text = document.querySelector("#text");
const man = document.querySelector("#man");

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  // حرکت سیاره‌ها در هنگام اسکرول
  planetLeft.style.transform = `translateX(-${value / 0.7}px)`;
  planetRight.style.transform = `translateX(${value / 0.7}px)`;

  // حرکت متن
  text.style.bottom = `${value}px`;
  // تغییر ارتفاع آسترو‌من
});
window.addEventListener("scroll", () => {
  let value = window.scrollY;

  // تغییر ارتفاع آسترومن
  let newHeight = window.innerHeight - value;
  man.style.height = `${Math.max(newHeight, 100)}px`; // حداقل ارتفاع 100px

  // انتقال آسترومن به پایین
  man.style.transform = `translateY(${value * 0.5}px)`;
});
