const cartBtn = document.querySelector(".header-cart-btn-link");
const cartModal = document.querySelector(".cart-modal-background");
const cartModalItems = document.querySelectorAll(".cart-modal-row");
const cartModalCloseBtn = document.querySelector(".cart-modal-close-btn");
const cartIconNumber = document.querySelector(".header-cart-number");
const cartItemQuantityMinusBtn = document.querySelector(
  ".cart-modal-item-quantity-minus-btn"
);
const cartItemQuantityPlusBtn = document.querySelector(
  ".cart-modal-item-quantity-plus-btn"
);

const cartCalculation = () => {
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
    cartModalItemTotal.innerText =
      cartModalItemQuantity * cartModalItemProductPrice;
  });
};

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

cartModalCloseBtn.addEventListener("click", () => {
  cartModal.style.display = "none";
});

cartBtn.addEventListener("click", () => {
  cartModal.style.display = "flex";
});

const cartInit = () => {
  cartCalculation();
  cartIconNumber.innerText = cartModalItems.length;
};

cartInit();
