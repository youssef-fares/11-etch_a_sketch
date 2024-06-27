const gridContainer = document.querySelector(".grid-container");

const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", function () {
  if (Number.isInteger(parseInt(input.value)) && input.value <= 100) {
    let squarePerSide = input.value;
    let gridSize = squarePerSide * squarePerSide;
    // }
    let dim = 800 / squarePerSide;
    console.log(dim);

    clearBox("grid");

    gridContainer.style.gridTemplateRows =
      "repeat(" + squarePerSide + ", " + dim + "px";
    gridContainer.style.gridTemplateColumns =
      "repeat(" + squarePerSide + ", " + dim + "px";

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
  } else {
    alert("Enter a number from 1 to 100");
  }
});

function clearBox(elementID) {
  var div = document.getElementById(elementID);

  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
}
