const images = document.querySelectorAll(".follow-us-image-container");
const imageLinks = [
  "https://images.unsplash.com/photo-1616837874254-8d5aaa63e273?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=556&q=80",
  "https://images.unsplash.com/photo-1582533552406-234434284c17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=527&q=80",
  "https://images.unsplash.com/photo-1524041255072-7da0525d6b34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
  "https://images.unsplash.com/photo-1601421415261-a22d30aa0eb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
];

images.forEach((image, index) => {
  image.style.backgroundImage = `url(${imageLinks[index]})`;
});
