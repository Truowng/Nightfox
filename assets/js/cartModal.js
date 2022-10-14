const cartBtn = document.querySelector(".header-cart-btn-link");
const cartModal = document.querySelector(".cart-modal-background");
const cartModalItemsContainer = document.querySelector(".cart-modal-row-wrap");
const cartModalItems = document.querySelectorAll(".cart-modal-row");
const cartModalTable = document.querySelector(".cart-modal-table");
const cartModalCloseBtn = document.querySelector(".cart-modal-close-btn");
const cartIconNumber = document.querySelector(".header-cart-number");
const cartModalContinueShoppingBtn = document.querySelector(
  ".cart-modal-btn-continue-shopping"
);
const cartModalViewBasketBtn = document.querySelector(
  ".cart-modal-btn-view-basket"
);
const cartItemQuantityMinusBtn = document.querySelector(
  ".cart-modal-item-quantity-minus-btn"
);
const cartItemQuantityPlusBtn = document.querySelector(
  ".cart-modal-item-quantity-plus-btn"
);

let cartModalCounter = 0;
const mobileAndTabletScale = window.matchMedia("(min-width: 1024px)");

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

// MOVE BUTTON FUNCTION

const moveBtns = (mobileAndTabletScale) => {
  console.log(mobileAndTabletScale.matches);
  if (mobileAndTabletScale.matches) {
    cartModalItemsContainer.innerHTML = `<p class="empty-basket": 10vw">Your basket is empty</p>`;
    cartModalItemsContainer.classList.add("flex-col");
    cartModalContinueShoppingBtn.classList.add("move-continue-shopping-btn");
    cartModalViewBasketBtn.classList.add("move-view-basket-btn");
  } else {
    cartModalItemsContainer.innerHTML = `<p class="empty-basket": 10vw">Your basket is empty</p>`;
    cartModalItemsContainer.classList.add("flex-col");
  }
};

mobileAndTabletScale.addListener(moveBtns);

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
      cartModalCounter++;
      if (cartModalCounter == cartModalItems.length) {
        moveBtns(mobileAndTabletScale);
      }
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
