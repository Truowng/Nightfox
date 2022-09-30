const menu = document.querySelector(".header-btn");
const items = document.querySelectorAll(".menu-item");
let toggleModal = 0;

colors = ["#513252", "#7A4069", "#CA4E79", "#FFC18E"];

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

// items.forEach((item, index) => {
//   item.addEventListener("mousemove", (e) => {
//     document.querySelector(
//       `.menu-item-image:nth-of-type(${index + 1})`
//     ).style.opacity = 1;
//     document.querySelector(
//       `.menu-item-image:nth-of-type(${index + 1})`
//     ).style.transform = "translate(50%, -50%) scale(1)";
//     document.querySelector(
//       ".modal-container"
//     ).style.backgroundColor = `${colors[index]}`;
//   });

//   item.addEventListener("mouseleave", (e) => {
//     document.querySelector(
//       `.menu-item-image:nth-of-type(${index + 1})`
//     ).style.opacity = 0;
//     document.querySelector(
//       `.menu-item-image:nth-of-type(${index + 1})`
//     ).style.transform = "translate(50%, -50%) scale(0.9)";
//     document.querySelector(".modal-container").style.backgroundColor = "black";
//   });
// });
