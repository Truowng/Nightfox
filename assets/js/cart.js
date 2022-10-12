const cartProductInfomations = [
  {
    image:
      "https://product.hstatic.net/200000491703/product/1.1_1a57f7ef49e149a3907e7e3b5328d0ff_master.png",
    name: "Nightfox <br /> Basics T-shirt",
    price: 199000,
  },
  {
    image:
      "https://product.hstatic.net/200000491703/product/ann03433__1__da2f9490f7f4448fb9c4dd484d63d033_master.jpg",
    name: "Iconic<br /> Pink",
    price: 357000,
  },
  {
    image:
      "https://product.hstatic.net/200000491703/product/ann03221_fe8cb0be403e477f8f44fc4c690d1191_master.jpg",
    name: "Orange<br /> Layer Nightfox",
    price: 318000,
  },
  {
    image:
      "https://product.hstatic.net/200000491703/product/ann03146_83f41405acb441bbb00b856c9ef7bd9c_master.jpg",
    name: "Dashed<br /> Letters Nightfox",
    price: 313000,
  },
  {
    image:
      "https://product.hstatic.net/200000491703/product/ann03612_e9b66b1cddf64fab90663862d8f9caa2_master.jpg",
    name: "Comfy<br /> Logo",
    price: 339000,
  },
  {
    image:
      "https://product.hstatic.net/200000491703/product/1.1_1a57f7ef49e149a3907e7e3b5328d0ff_master.png",
    name: "Nightfox<br /> Basics T-shirt",
    price: 199000,
  },
  {
    image:
      "https://product.hstatic.net/200000491703/product/ann03433__1__da2f9490f7f4448fb9c4dd484d63d033_master.jpg",
    name: "Iconic<br /> Pink",
    price: 357000,
  },
  {
    image:
      "https://product.hstatic.net/200000491703/product/ann03221_fe8cb0be403e477f8f44fc4c690d1191_master.jpg",
    name: "Orange<br /> Layer Nightfox",
    price: 318000,
  },
  {
    image:
      "https://product.hstatic.net/200000491703/product/ann03146_83f41405acb441bbb00b856c9ef7bd9c_master.jpg",
    name: "Dashed<br /> Letters Nightfox",
    price: 313000,
  },
  {
    image:
      "https://product.hstatic.net/200000491703/product/ann03612_e9b66b1cddf64fab90663862d8f9caa2_master.jpg",
    name: "Comfy<br /> Logo",
    price: 339000,
  },
  {
    image:
      "https://product.hstatic.net/200000491703/product/1.1_1a57f7ef49e149a3907e7e3b5328d0ff_master.png",
    name: "Nightfox<br /> Basics T-shirt",
    price: 199000,
  },
  {
    image:
      "https://product.hstatic.net/200000491703/product/ann03433__1__da2f9490f7f4448fb9c4dd484d63d033_master.jpg",
    name: "Iconic<br /> Pink",
    price: 357000,
  },
  {
    image:
      "https://product.hstatic.net/200000491703/product/ann03221_fe8cb0be403e477f8f44fc4c690d1191_master.jpg",
    name: "Orange<br /> Layer Nightfox",
    price: 318000,
  },
  {
    image:
      "https://product.hstatic.net/200000491703/product/ann03146_83f41405acb441bbb00b856c9ef7bd9c_master.jpg",
    name: "Dashed<br /> Letters Nightfox",
    price: 313000,
  },
  {
    image:
      "https://product.hstatic.net/200000491703/product/ann03612_e9b66b1cddf64fab90663862d8f9caa2_master.jpg",
    name: "Comfy<br /> Logo",
    price: 339000,
  },
];

const cartItems = document.querySelectorAll(".cart-row");
const cartTable = document.querySelector(".cart-table");
const subTotal = document.querySelector(".cart-subtotal span");
const cartItemQuantityMinusBtn = document.querySelector(
  ".cart-item-quantity-minus-btn"
);
const cartItemQuantityPlusBtn = document.querySelector(
  ".cart-item-quantity-plus-btn"
);

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// CALCULATE FUNCTION

const cartCalculation = () => {
  let cartItemTotalArr = [];
  let cartItemTotalResult;
  cartItems.forEach((cartItem) => {
    const cartItemTotal = cartItem.querySelector(".cart-item-total-container");
    const cartItemQuantity = cartItem.querySelector(
      ".cart-item-quantity"
    ).value;
    const cartItemProductPrice = cartItem.querySelector(
      ".cart-item-product-price span"
    ).innerText;

    cartItemTotal.innerText = `${numberWithCommas(
      cartItemQuantity * cartItemProductPrice
    )}đ`;
    cartItemTotalArr.push(cartItemQuantity * cartItemProductPrice);
  });
  cartItemTotalArr.reduce((total, number) => {
    return (cartItemTotalResult = total + number);
  });
  subTotal.innerText = `${numberWithCommas(cartItemTotalResult)}đ`;
};

// PLUS/MINUS/DEL FUNCTION

cartItems.forEach((cartItem) => {
  cartItem
    .querySelector(".cart-item-quantity-minus-btn")
    .addEventListener("click", () => {
      if (cartItem.querySelector(".cart-item-quantity").value > 1) {
        let cartItemQuantityCurrentValue = cartItem.querySelector(
          ".cart-item-quantity"
        ).value;
        cartItem.querySelector(".cart-item-quantity").value =
          --cartItemQuantityCurrentValue;
        cartInit();
      }
    });
  cartItem
    .querySelector(".cart-item-quantity-plus-btn")
    .addEventListener("click", () => {
      let cartItemQuantityCurrentValue = cartItem.querySelector(
        ".cart-item-quantity"
      ).value;
      cartItem.querySelector(".cart-item-quantity").value =
        ++cartItemQuantityCurrentValue;
      cartInit();
    });

  cartItem
    .querySelector(".cart-item-quantity-delete-btn")
    .addEventListener("click", () => {
      cartItem.remove();
      cartInit();
    });
});

// INIT

const cartInit = () => {
  cartCalculation();
};

cartInit();
