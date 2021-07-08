const burgerButton = document.getElementById("burger-menu");
const [firstLine, space, secondLine] = burgerButton.children;

const imageContainer = document.getElementById("container");

const menuContainer = document.getElementById("container-menu");

burgerButton.onclick = () => {
  if (!menuContainer.classList.contains("visible")) {
    menuContainer.classList.add("visible");
    space.classList.remove("visible");
    firstLine.classList.add("line-rotation-clockwise");
    secondLine.classList.add("line-rotation-anticlockwise");
    secondLine.style["position"] = "absolute";
  } else {
    menuContainer.classList.remove("visible");
    space.classList.add("visible");
    firstLine.classList.remove("line-rotation-clockwise");
    secondLine.classList.remove("line-rotation-anticlockwise");
    secondLine.style["position"] = "inherit";
  }
};

document.createElement("div").classList.add();
