class Carousel {
  constructor(imgElement) {
    this.imgElement = imgElement;
    this.currentImage = this.imgElement.dataset.img;
  }

  showImage() {
    images.forEach(img => (img.style.display = "none"));
    this.imgElement.style.display = "block";
  }
}

const carousel = document.querySelector(".carousel");
const leftButton = carousel.querySelector(".left-button");
const rightButton = carousel.querySelector(".right-button");
const images = carousel.querySelectorAll("img");
let buttonValue = 1;

const imgArray = Array.from(images).map(img => {
  return new Carousel(img);
});

rightButton.addEventListener("click", () => {
  if (buttonValue === 4) buttonValue = 0;

  buttonValue++;
  imgArray[buttonValue - 1].showImage();
});

leftButton.addEventListener("click", () => {
  if (buttonValue === 1) {
    buttonValue = 4;
    imgArray[buttonValue - 1].showImage();
    return;
  }

  buttonValue--;
  imgArray[buttonValue - 1].showImage();
});

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
