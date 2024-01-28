// JavaScript 코드
let currentIndex = 0;
const banners = document.querySelectorAll(".slideshow-container img");
const totalBanners = banners.length;

function showNextBanner() {
  banners[currentIndex].style.display = "none";
  currentIndex = (currentIndex + 1) % totalBanners;
  banners[currentIndex].style.display = "block";
}

setInterval(showNextBanner, 7000); // 3초마다 다음 배너 보여주기

const slideshowContainer = document.querySelector(".slideshow-container");
const images = slideshowContainer.querySelectorAll("img");
const prevButton = document.createElement("i");
const nextButton = document.createElement("i");
prevButton.classList.add("fas", "fa-chevron-left", "prev-button");
nextButton.classList.add("fas", "fa-chevron-right", "next-button");
slideshowContainer.appendChild(prevButton);
slideshowContainer.appendChild(nextButton);

let currentIndex1 = 0;

function showImage(index) {
  images.forEach((image) => {
    image.style.display = "none";
  });
  images[index].style.display = "block";
}

function slideToNext() {
  currentIndex1++;
  if (currentIndex1 >= images.length) {
    currentIndex1 = 0;
  }
  showImage(currentIndex1);
}

function slideToPrev() {
  currentIndex1--;
  if (currentIndex1 < 0) {
    currentIndex1 = images.length - 1;
  }
  showImage(currentIndex1);
}

nextButton.addEventListener("click", slideToNext);
prevButton.addEventListener("click", slideToPrev);

showImage(currentIndex1);
