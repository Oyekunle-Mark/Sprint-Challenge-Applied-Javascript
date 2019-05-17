class Carousel {
  constructor(imgElement) {
    this.imgElement = imgElement;
  }

  showImage() {
    images.forEach(img => img.classList.remove("show"));
    this.imgElement.classList.add("show");
  }
}

// display the first image
document.querySelector("img").classList.add("show");

// get the carousel, images and buttons
const carousel = document.querySelector(".carousel");
const leftButton = carousel.querySelector(".left-button");
const rightButton = carousel.querySelector(".right-button");
const images = carousel.querySelectorAll("img");

// represents the currently displayed image
let currentImageIndex = 1;

const imgArray = Array.from(images).map(img => {
  return new Carousel(img);
});

// add click event handler to the right button
rightButton.addEventListener("click", () => {
  if (currentImageIndex === 4) currentImageIndex = 0;

  currentImageIndex++;
  imgArray[currentImageIndex - 1].showImage();
});

// add click event handler to the left button
leftButton.addEventListener("click", () => {
  if (currentImageIndex === 1) {
    currentImageIndex = 4;
    imgArray[currentImageIndex - 1].showImage();
    return;
  }

  currentImageIndex--;
  imgArray[currentImageIndex - 1].showImage();
});
