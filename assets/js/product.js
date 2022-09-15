// const container = document.querySelector(".product-carousel-container");
// const pages = document.querySelectorAll(".product-carousel-item");

// container.addEventListener("wheel", (e) => {
//   e.preventDefault();
//   container.scrollLeft += e.deltaY;
// });

// pages.forEach((page) => {
//   page.addEventListener("click", () => {
//     if (page.classList[1] === "openUI") {
//       page.classList.remove("openUI");
//       document.querySelector(".product-carousel-item-text").remove();
//       page.style.height = "30vw";
//     } else {
//       page.classList.add("openUI");
//       page.innerHTML = `<p class="product-carousel-item-text"> пошто је непоштовање и презирање права човека водило варварским</p>`;
//       page.style.height = "50vw";
//     }
//   });
// });

// document.addEventListener(
//   "DOMContentLoaded",
//   () => {
//     const scroller = new SweetScroll(
//       {
//         horizontal: true,
//         cancellable: true,
//       },
//       ".banner-container"
//     );
//   },
//   false
// );

// const productCarouselContainerWidth = getComputedStyle(
//   document.querySelector(".product-carousel-container")
// ).style.width;

const productCarouselContainerWidth =
  document.querySelector(".product-carousel-container").getBoundingClientRect()
    .width + 250;

const scroll = {
  values: [
    {
      x: -productCarouselContainerWidth,
    },
  ],
};

console.log(productCarouselContainerWidth);

const tween = new TimelineLite();

tween.add(
  TweenLite.to(".product-carousel-container", 1, {
    bezier: scroll,
    ease: Power1.easeInOut,
  })
);

const controller = new ScrollMagic.Controller();

const scence = new ScrollMagic.Scene({
  triggerElement: ".product-carousel-container",
  duration: 2000,
  triggerHook: 0.1,
})
  .setTween(tween)
  .addIndicators()
  .setPin(".product-carousel-container")
  .addTo(controller);
