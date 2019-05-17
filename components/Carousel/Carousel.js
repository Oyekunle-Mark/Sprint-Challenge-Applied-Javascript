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

rightButton.addEventListener("click", () => {
  if (currentImageIndex === 4) currentImageIndex = 0;

  currentImageIndex++;
  imgArray[currentImageIndex - 1].showImage();
});

leftButton.addEventListener("click", () => {
  if (currentImageIndex === 1) {
    currentImageIndex = 4;
    imgArray[currentImageIndex - 1].showImage();
    return;
  }

  currentImageIndex--;
  imgArray[currentImageIndex - 1].showImage();
});

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
