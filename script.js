let currentIndex = 0;
const banners = document.querySelectorAll(".slideshow-container img");
const totalBanners = banners.length;

function showNextBanner() {
  banners[currentIndex].style.display = "none";
  currentIndex = (currentIndex + 1) % totalBanners;
  banners[currentIndex].style.display = "block";
}

setInterval(showNextBanner, 7000); // 7초마다 다른 배너 보여주기

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

const slideContainer = document.querySelector(".contents--img");
const slides = document.querySelectorAll(".slide");
const prButton = document.querySelector(".pr-button");
const neButton = document.querySelector(".ne-button");
let currentIndex2 = 0;
const imagesPerSlide = 5;

function updateSlide() {
  slides.forEach((slide, index) => {
    if (index >= currentIndex2 && index < currentIndex2 + imagesPerSlide) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
}

prButton.addEventListener("click", () => {
  currentIndex2 -= imagesPerSlide;
  if (currentIndex2 < 0) {
    currentIndex2 = slides.length - imagesPerSlide;
  }
  updateSlide();
});

neButton.addEventListener("click", () => {
  currentIndex2 += imagesPerSlide;
  if (currentIndex2 >= slides.length) {
    currentIndex2 = 0;
  }
  updateSlide();
});

// 초기 슬라이드 설정
updateSlide();

const slideContainer1 = document.querySelector(".contents--img1");
const slides1 = document.querySelectorAll(".slide1");
const prButton1 = document.querySelector(".pr-button1");
const neButton1 = document.querySelector(".ne-button1");
let currentIndex3 = 0;
const imagesPerSlide1 = 5;

function updateSlide1() {
  slides1.forEach((slide, index) => {
    if (index >= currentIndex3 && index < currentIndex3 + imagesPerSlide1) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
}

prButton1.addEventListener("click", () => {
  currentIndex3 -= imagesPerSlide1;
  if (currentIndex3 < 0) {
    currentIndex3 = slides1.length - imagesPerSlide1;
  }
  updateSlide1();
});

neButton1.addEventListener("click", () => {
  currentIndex3 += imagesPerSlide1;
  if (currentIndex3 >= slides1.length) {
    currentIndex3 = 0;
  }
  updateSlide1();
});

// 초기 슬라이드 설정
updateSlide1();

const slideContainer2 = document.querySelector(".contents--img2");
const slides2 = document.querySelectorAll(".slide2");
const prButton2 = document.querySelector(".pr-button2");
const neButton2 = document.querySelector(".ne-button2");
let currentIndex4 = 0;
const imagesPerSlide2 = 5;

function updateSlide2() {
  slides2.forEach((slide, index) => {
    if (index >= currentIndex4 && index < currentIndex4 + imagesPerSlide2) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
}

prButton2.addEventListener("click", () => {
  currentIndex4 -= imagesPerSlide2;
  if (currentIndex4 < 0) {
    currentIndex4 = slides2.length - imagesPerSlide2;
  }
  updateSlide2();
});

neButton2.addEventListener("click", () => {
  currentIndex4 += imagesPerSlide2;
  if (currentIndex4 >= slides2.length) {
    currentIndex4 = 0;
  }
  updateSlide2();
});

// 초기 슬라이드 설정
updateSlide2();
