const productSectionContainer = document.querySelector(
  ".all-product-section-image-container .row"
);

const productInfomations = [
  {
    image:
      "https://product.hstatic.net/200000491703/product/1.1_1a57f7ef49e149a3907e7e3b5328d0ff_master.png",
    name: "Nightfox Basics T-shirt",
    price: "199.000đ",
  },
  {
    image:
      "https://product.hstatic.net/200000491703/product/ann03433__1__da2f9490f7f4448fb9c4dd484d63d033_master.jpg",
    name: "Iconic Pink",
    price: "357.000đ",
  },
  {
    image:
      "https://product.hstatic.net/200000491703/product/ann03221_fe8cb0be403e477f8f44fc4c690d1191_master.jpg",
    name: "Orange Layer Nightfox",
    price: "318.000đ",
  },
  {
    image:
      "https://product.hstatic.net/200000491703/product/ann03146_83f41405acb441bbb00b856c9ef7bd9c_master.jpg",
    name: "Dashed Letters Nightfox",
    price: "313.000đ",
  },
  {
    image:
      "https://product.hstatic.net/200000491703/product/ann03612_e9b66b1cddf64fab90663862d8f9caa2_master.jpg",
    name: "Comfy Logo",
    price: "339.000đ",
  },
];

const allProducts = productInfomations.map((productInfomation) => {
  return `<div
  class="all-product-section-image-item-container col-lg-3 col-md-6 col-sm-12"
 >
  <div class="all-product-section-image" style="background-image: url(${productInfomation.image})"></div>
  <div class="all-product-section-info-container">
    <p class="all-product-section-info-name">
      ${productInfomation.name}
    </p>
    <p class="all-product-section-info-price">${productInfomation.price}</p>
  </div>
 </div>`;
});
productSectionContainer.innerHTML = allProducts.join("");
