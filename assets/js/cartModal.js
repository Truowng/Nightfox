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

const cartBtn = document.querySelector(".header-cart-btn-link");
const cartModal = document.querySelector(".cart-modal-background");
const cartModalItems = document.querySelectorAll(".cart-modal-row");
const cartModalTable = document.querySelector(".cart-modal-table");
const cartModalCloseBtn = document.querySelector(".cart-modal-close-btn");
const cartIconNumber = document.querySelector(".header-cart-number");
const cartModalContinueShoppingBtn = document.querySelector(
  ".cart-modal-btn-continue-shopping"
);
const cartItemQuantityMinusBtn = document.querySelector(
  ".cart-modal-item-quantity-minus-btn"
);
const cartItemQuantityPlusBtn = document.querySelector(
  ".cart-modal-item-quantity-plus-btn"
);

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// CALCULATE FUNCTION

const cartModalCalculation = () => {
  cartModalItems.forEach((cartModalItem) => {
    const cartModalItemTotal = cartModalItem.querySelector(
      ".cart-modal-item-total-container"
    );
    const cartModalItemQuantity = cartModalItem.querySelector(
      ".cart-modal-item-quantity"
    ).value;
    const cartModalItemProductPrice = cartModalItem.querySelector(
      ".cart-modal-item-product-price span"
    ).innerText;
    cartModalItemTotal.innerText = `${numberWithCommas(
      cartModalItemQuantity * cartModalItemProductPrice
    )}đ`;
  });
};

console.log(cartModalCalculation());

// // CARTITEM MAP
// const allCartProductTitle = ` <tr class="cart-modal-header-row">
// <th class="cart-modal-product">product</th>
// <th class="cart-modal-quantity">quantity</th>
// <th class="cart-modal-total">total</th>
// </tr>`;

// const allCartProducts = cartProductInfomations.map((cartProductInfomation) => {
//   return `<tr class="cart-modal-row">
//     <td class="cart-modal-item-product-container">
//     <div class="cart-modal-item-product-image" style="background-image: url(${
//       cartProductInfomation.image
//     })"></div>
//     <div class="cart-modal-item-product-info">
//       <p class="cart-modal-item-product-name">
//         ${cartProductInfomation.name}
//       </p>
//       <p class="cart-modal-item-product-price">
//         UNIT PRICE: <span>${cartProductInfomation.price}</span>đ
//       </p>
//     </div>
//   </td>
//   <td class="cart-modal-item-quantity-container">
//     <button class="cart-modal-item-quantity-minus-btn">
//       &#8722;
//     </button>
//     <input
//       type="number"
//       onchange="${cartModalCalculation()}"
//       value="1"
//       min="1"
//       class="cart-modal-item-quantity"
//     />
//     <button class="cart-modal-item-quantity-plus-btn">&plus;</button>
//     <button class="cart-modal-item-quantity-delete-btn">
//       <i class="fa-solid fa-trash-can"></i>
//     </button>
//   </td>
//   <td class="cart-modal-item-total-container">${cartModalCalculation()}</td>
// </tr>`;
// });

// cartModalTable.innerHTML = allCartProductTitle.concat(
//   "",
//   allCartProducts.join("")
// );

// PLUS/MINUS/DEL FUNCTION

cartModalItems.forEach((cartModalItem) => {
  cartModalItem
    .querySelector(".cart-modal-item-quantity-minus-btn")
    .addEventListener("click", () => {
      if (cartModalItem.querySelector(".cart-modal-item-quantity").value > 1) {
        let cartModalItemQuantityCurrentValue = cartModalItem.querySelector(
          ".cart-modal-item-quantity"
        ).value;
        cartModalItem.querySelector(".cart-modal-item-quantity").value =
          --cartModalItemQuantityCurrentValue;
        cartInit();
      }
    });
  cartModalItem
    .querySelector(".cart-modal-item-quantity-plus-btn")
    .addEventListener("click", () => {
      let cartModalItemQuantityCurrentValue = cartModalItem.querySelector(
        ".cart-modal-item-quantity"
      ).value;
      cartModalItem.querySelector(".cart-modal-item-quantity").value =
        ++cartModalItemQuantityCurrentValue;
      cartInit();
    });

  cartModalItem
    .querySelector(".cart-modal-item-quantity-delete-btn")
    .addEventListener("click", () => {
      cartModalItem.remove();
      cartInit();
    });
});

// OPEN/CLOSE MODAL

cartModalContinueShoppingBtn.addEventListener("click", () => {
  cartModal.style.animation = "fadeOut cubic-bezier(0.77, 0, 0.175, 1) 0.75s";
  cartModal.querySelector(".cart-modal-container").style.animation =
    "closeCartModal 0.75s cubic-bezier(0.77, 0, 0.175, 1)";
  setTimeout(() => {
    cartModal.style.display = "none";
  }, 750);
});

cartModalCloseBtn.addEventListener("click", () => {
  cartModal.style.animation = "fadeOut cubic-bezier(0.77, 0, 0.175, 1) 0.75s";
  cartModal.querySelector(".cart-modal-container").style.animation =
    "closeCartModal 0.75s cubic-bezier(0.77, 0, 0.175, 1)";
  setTimeout(() => {
    cartModal.style.display = "none";
  }, 750);
});

cartBtn.addEventListener("click", () => {
  cartModal.style.animation = "fadeIn cubic-bezier(0.77, 0, 0.175, 1) 0.75s";
  cartModal.querySelector(".cart-modal-container").style.animation =
    "openCartModal 0.75s cubic-bezier(0.77, 0, 0.175, 1)";
  cartModal.style.display = "flex";
});

// INIT

const cartInit = () => {
  cartModalCalculation();
  cartIconNumber.innerText = cartModalItems.length;
};

cartInit();
