const images = document.querySelectorAll(".follow-us-image-container");
const imageLinks = [
  "../Nightfox/assets/img/HoangAnhModel/1.JPG",
  "../Nightfox/assets/img/MinhChienModel/3.jpg",
  "../Nightfox/assets/img/HoangAnhModel/2.JPG",
  "../Nightfox/assets/img/MinhChienModel/4.jpg",
];

images.forEach((image, index) => {
  image.style.backgroundImage = `url(${imageLinks[index]})`;
});
