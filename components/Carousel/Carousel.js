class Carousel {
  constructor(imgElement) {
    this.imgElement = imgElement;
    this.leftButton = document.querySelector(".left-button");
    this.rightButton = document.querySelector(".right-button");

    // represents the currently displayed image
    this.currentImageIndex = 1;

    // add click event handler to the right button
    this.rightButton.addEventListener("click", () => {
      if (this.currentImageIndex === imgArray.length)
        this.currentImageIndex = 0;

      this.currentImageIndex++;
      imgArray[this.currentImageIndex - 1].showImage();
    });

    // add click event handler to the left button
    this.leftButton.addEventListener("click", () => {
      if (this.currentImageIndex === 1) {
        this.currentImageIndex = imgArray.length;
        imgArray[this.currentImageIndex - 1].showImage();
        return;
      }

      this.currentImageIndex--;
      imgArray[this.currentImageIndex - 1].showImage();
    });
  }

  showImage() {
    images.forEach(img => img.classList.remove("show"));
    this.imgElement.classList.add("show");
  }
}

// get the carousel, images and buttons
const carousel = document.querySelector(".carousel");

// display the first image
document.querySelector("img").classList.add("show");

const images = carousel.querySelectorAll("img");

const imgArray = Array.from(images).map(img => new Carousel(img));
