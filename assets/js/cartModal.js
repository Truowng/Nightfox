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

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

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
    cartModalItemTotal.innerText = `${numberWithCommas(
      cartModalItemQuantity * cartModalItemProductPrice
    )}đ`;
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

const cartInit = () => {
  cartCalculation();
  cartIconNumber.innerText = cartModalItems.length;

  document.querySelectorAll(".cart-modal-item-product-price span").innerText =
    numberWithCommas(
      document.querySelector(".cart-modal-item-product-price span").innerText
    );
};

cartInit();
