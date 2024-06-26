const gridContainer = document.querySelector(".grid-container");

const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", function () {
  // if(Number.isInteger(input.value)){
  let squarePerSide = input.value;
  let gridSize = squarePerSide * squarePerSide;
  // }

  gridContainer.style.gridTemplateRows =
    "repeat(" + squarePerSide + ", calc(2vw + 5px))";
  gridContainer.style.gridTemplateColumns =
    "repeat(" + squarePerSide + ", calc(2vw + 5px))";

  //   existing grid should be removed before creating new one !!

  for (i = 0; i < gridSize; i++) {
    const content = document.createElement("div");
    content.classList.add("content");
    content.textContent = " ";
    content.style.border = "solid 1px gray";

    gridContainer.appendChild(content);
  }

  const contents = document.querySelectorAll(".content");

  contents.forEach((content) => {
    content.addEventListener("mouseover", (event) => {
      let rgbRed = Math.floor(Math.random() * 256);
      let rgbGreen = Math.floor(Math.random() * 256);
      let rgbBlue = Math.floor(Math.random() * 256);
      let rgb = "rgb(" + rgbRed + "," + rgbGreen + "," + rgbBlue + ")";

      event.target.style.backgroundColor = rgb;
    });
  });
});

// addEventListener("mouseover", (event) => {});
// content.style.backgroundColor="rgb(241,111,222)"
