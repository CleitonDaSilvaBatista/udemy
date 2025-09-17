const slides = document.querySelector(".slides");
const slideItems = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;

function showSlide(i) {
  if (i < 0) index = slideItems.length - 1;
  else if (i >= slideItems.length) index = 0;
  else index = i;

  slides.style.transform = `translateX(${-index * 100}%)`;
}

prevBtn.addEventListener("click", () => showSlide(index - 1));
nextBtn.addEventListener("click", () => showSlide(index + 1));

// autoplay (muda a cada 5s)
setInterval(() => showSlide(index + 1), 4000);
