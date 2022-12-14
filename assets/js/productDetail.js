const container = document.querySelector(".product-detail-container");
const separates = document.querySelectorAll(
  ".product-detail-separate-container"
);
const tabletAndMobileBreakpoint = window.matchMedia("(max-width: 1024px)");
let productDetailWidth;
let productDetailCurrent = 0;
let productDetailTarget = 0;
let productDetailEase = 0.07;

const lerp = (start, end, t) => {
  return start * (1 - t) + end * t;
};

const setTransform = (el, transform) => {
  el.style.transform = transform;
};

const init = () => {
  productDetailWidth = container.getBoundingClientRect().width;
  document.querySelector(".content-container").style.height = `${
    productDetailWidth - (window.innerWidth - window.innerHeight)
  }px`;
};

const productDetailAnimate = () => {
  productDetailCurrent = parseFloat(
    lerp(productDetailCurrent, productDetailTarget, productDetailEase)
  ).toFixed(2);
  console.log(productDetailTarget);
  productDetailTarget = window.scrollY;
  setTransform(container, `translateX(-${productDetailCurrent}px)`);
  separates.forEach((separate) => {
    setTransform(separate, `translateY(-${productDetailCurrent / 5}px)`);
  });
  requestAnimationFrame(productDetailAnimate);
};

function itemResponsive(tabletAndMobileBreakpoint) {
  if (tabletAndMobileBreakpoint.matches) {
    console.log("hello");
  } else {
    init();
    window.addEventListener("resize", init);
    productDetailAnimate();
  }
}
itemResponsive(tabletAndMobileBreakpoint);
tabletAndMobileBreakpoint.addListener(itemResponsive);
