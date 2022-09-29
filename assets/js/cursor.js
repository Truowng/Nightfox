let innerCursor = document.querySelector(".inner-cursor");
let outerCursor = document.querySelector(".outer-cursor");

document.addEventListener("mousemove", moveCursor);

function moveCursor(e) {
  let x = e.clientX;
  let y = e.clientY;
  innerCursor.style.left = `${x}px`;
  innerCursor.style.top = `${y}px`;
  outerCursor.style.left = `${x}px`;
  outerCursor.style.top = `${y}px`;
}

let links = Array.from(document.querySelectorAll("a"));
let buttons = Array.from(document.querySelectorAll("button"));
let inputs = Array.from(document.querySelectorAll("input"));
let labels = Array.from(document.querySelectorAll("label"));

links.forEach((link) => {
  link.addEventListener("mouseover", () => {
    innerCursor.classList.add("grow");
    outerCursor.classList.add(".spin");
  });
  link.addEventListener("mouseleave", () => {
    innerCursor.classList.remove("grow");
  });
});

buttons.forEach((button) => {
  button.addEventListener("mouseover", () => {
    innerCursor.classList.add("grow");
  });
  button.addEventListener("mouseleave", () => {
    innerCursor.classList.remove("grow");
  });
});

inputs.forEach((input) => {
  input.addEventListener("mouseover", () => {
    innerCursor.classList.add("grow");
  });
  input.addEventListener("mouseleave", () => {
    innerCursor.classList.remove("grow");
  });
});

labels.forEach((label) => {
  label.addEventListener("mouseover", () => {
    innerCursor.classList.add("grow");
  });
  label.addEventListener("mouseleave", () => {
    innerCursor.classList.remove("grow");
  });
});
