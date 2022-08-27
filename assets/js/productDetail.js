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
  container.scrollLeft += e.deltaY;
  separates.forEach((separate, index) => {
    separate.style.transform = scroll[index];
  });
});
