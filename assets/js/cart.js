const cartItems = document.querySelectorAll(".cart-row");
const cartItemsContainer = document.querySelector(".cart-row-wrap");
const cartTable = document.querySelector(".cart-table");
const subTotalContainer = document.querySelector(".cart-subtotal-container");
const subTotal = document.querySelector(".cart-subtotal span");
const cartItemQuantityMinusBtn = document.querySelector(
  ".cart-item-quantity-minus-btn"
);
const cartItemQuantityPlusBtn = document.querySelector(
  ".cart-item-quantity-plus-btn"
);

let cartItemCounter = 0;

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const cartEmptyBasket = () => {
  cartItemsContainer.classList.add("flex-col");
  cartItemsContainer.style.height = "50vh";
  subTotalContainer.style.display = "none";
  cartItemsContainer.innerHTML = `<p class="empty-basket">your basket is empty</p>
  <a href="allProduct.html" class="empty-basket-link">continue-shopping</a>`;
};

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
      ++cartItemCounter;
      if (cartItemCounter == cartItems.length) {
        cartEmptyBasket();
      }
      cartInit();
    });
});

// INIT

const cartInit = () => {
  cartCalculation();
};

cartInit();
