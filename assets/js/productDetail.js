const container = document.querySelector(".product-detail-container");
const separates = document.querySelectorAll(
  ".product-detail-separate-container"
);

container.addEventListener("wheel", (e) => {
  const scroll = [
    `translateY(${-((container.scrollLeft += e.deltaY) / 35)}%)`,
    `translateY(${-200 + (container.scrollLeft += e.deltaY) / 35}%)`,
  ];

  e.preventDefault();

  separates.forEach((separate, index) => {
    separate.style.transform = scroll[index];
  });

  // document.querySelector(
  //   ".product-detail-name"
  // ).style.transform = `translateY(${(container.scrollLeft += e.deltaY) / 10}%)`;

  // document.querySelector(
  //   ".product-detail-material-image-text span"
  // ).style.transform = `translateX(${
  //   25 - (container.scrollLeft += e.deltaY) / 150
  // }%)`;

  // document.querySelector(
  //   ".product-detail-material-image-text"
  // ).style.transform = `translateX(${
  //   25 - (container.scrollLeft += e.deltaY) / 120
  // }%)`;

  // document.querySelector(
  //   ".product-detail-description-content-text"
  // ).style.transform = `translateX(${
  //   20 - (container.scrollLeft += e.deltaY) / 55
  // }%)`;

  // document.querySelector(
  //   ".product-detail-description-title"
  // ).style.transform = `translateX(${
  //   -(container.scrollLeft += e.deltaY) / 150
  // }%)`;

  // document.querySelector(
  //   ".product-detail-material"
  // ).style.transform = `translateX(${
  //   50 - (container.scrollLeft += e.deltaY) / 60
  // }%)`;
});
