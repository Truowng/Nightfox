const menu = document.querySelector(".header-btn");
const menuItems = document.querySelectorAll(".menu-item");
// const tabletAndMobileBreakpoint = window.matchMedia("(max-width: 1024px)");
let toggleModal = 0;

menu.addEventListener("click", () => {
  if (toggleModal === 0) {
    document.querySelector(".modal-container").style.transform =
      "translateX(0%)";
    menu.innerHTML = `<i class="fa-solid fa-xmark header-btn-icon"></i>`;
    menu.style.borderColor = "#fff";
    toggleModal = 1;
  } else {
    const closeModal = () => {
      document.querySelector(".modal-container").style.transform =
        "translateX(100%)";
      menu.innerHTML = `<i class="fa-solid fa-bars header-btn-icon"></i>`;
      menu.style.borderColor = "#000";
    };
    closeModal();
    toggleModal = 0;
  }
});

// function itemResponsive(tabletAndMobileBreakpoint) {
//   if (tabletAndMobileBreakpoint.matches) {
//     if (toggleModal === 0) {
//       menuItems.forEach((menuItem) => {
//         menuItem.style.setProperty = ("--background", "green");
//         menuItem.style.setProperty =
//           ("--animation", "0.6s reFill cubic-bezier(0.77, 0, 0.175, 1) 0.75s");
//         menuItem.style.setProperty = ("--animation-fill-mode", "forwards");
//       });
//       toggleModal = 1;
//     } else {
//       const closeModal = () => {
//         menuItems.forEach((menuItem) => {
//           menuItem.style.setProperty = ("--animation", "none");
//           menuItem.style.setProperty = ("--animation-fill-mode", "forwards");
//         });
//       };
//       closeModal();
//       toggleModal = 0;
//     }
//   }
// }
// itemResponsive(tabletAndMobileBreakpoint);
// tabletAndMobileBreakpoint.addListener(itemResponsive);
