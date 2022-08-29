const colors = document.querySelectorAll(
  ".product-detail-order-infomation-color"
);

const ImageContainer = document.querySelector(
  ".product-detail-image-container"
);

const radioBtns = document.querySelectorAll(
  ".product-detail-order-infomation-size-checkbox-container"
);

radioBtns.forEach((radioBtn) => {
  radioBtn.addEventListener("click", () => {
    radioBtn.style.backgroundColor = "#000";
    radioBtn.style.color = "#fff";
  });
});

const colorsList = ["#fff", "#000"];

const imagesList = [
  "https://product.hstatic.net/200000491703/product/ann03507_12a4c43f872840eebfbbbe21ec9329f6_master.jpg",
  "https://product.hstatic.net/200000491703/product/ann03549_5f0e1a62e122497da18e157c64681cd7_master.jpg",
  "https://product.hstatic.net/200000491703/product/ann03313_7acf3297fdcc4e37a510d4544d16a086_master.jpg",
  "https://product.hstatic.net/200000491703/product/ann03381_96a659d0c84f41e0991bf2461a4b0bcf_master.jpg",
  "https://product.hstatic.net/200000491703/product/ann03396_d1f3b3c55df94cae9a873a273d9c38d9_master.jpg",
  "https://product.hstatic.net/200000491703/product/ann03386_2731a7b4e95b4409af6b3d9c17724e5d_master.jpg",
];

let count = 0;

colors.forEach((color, index) => {
  color.style.backgroundColor = colorsList[index];
});

ImageContainer.style.backgroundImage = `url("${imagesList[count]}")`;

document
  .querySelector(".product-detail-image-next-btn")
  .addEventListener("click", () => {
    if (count < 5) {
      count++;
      console.log(count);
      ImageContainer.style.backgroundImage = `url("${imagesList[count]}")`;
    } else {
      count = 0;
      ImageContainer.style.backgroundImage = `url("${imagesList[count]}")`;
    }
  });

document
  .querySelector(".product-detail-image-prev-btn")
  .addEventListener("click", () => {
    if (0 < count && count <= 5) {
      count--;
      ImageContainer.style.backgroundImage = `url("${imagesList[count]}")`;
    } else {
      count = 5;
      ImageContainer.style.backgroundImage = `url("${imagesList[count]}")`;
    }
  });
