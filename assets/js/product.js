const container = document.querySelector(".product-carousel-container");
const pages = document.querySelectorAll(".product-carousel-item");

container.addEventListener("wheel", (e) => {
  e.preventDefault();
  container.scrollLeft += e.deltaY;
});

pages.forEach((page) => {
  page.addEventListener("click", () => {
    if (page.classList[1] === "openUI") {
      page.classList.remove("openUI");
      document.querySelector(".product-carousel-item-text").remove();
      page.style.height = "30vw";
    } else {
      page.classList.add("openUI");
      page.innerHTML = `<p class="product-carousel-item-text"> пошто је непоштовање и презирање права човека водило варварским</p>`;
      page.style.height = "50vw";
    }
  });
});
