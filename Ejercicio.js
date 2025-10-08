//1.Cambiar el color de un párrafo al hacer clic en un botón.
const btnColor = document.getElementById("button");
btnColor.addEventListener("click", function() {
  const parrafo = document.querySelector(".old-div");
  parrafo.style.backgroundColor = "lightblue";
});

//2.Crear un párrafo nuevo dentro de un div.
const mainDiv = document.querySelector(".main-div");
const newParagraph = document.createElement("p");
newParagraph.textContent = "Este es un párrafo nuevo agregado con JavaScript.";
mainDiv.appendChild(newParagraph);

//3.Eliminar el último elemento de una lista con un botón.
button.addEventListener("click", () => {
  const lista = document.querySelector(".lista");
  if (lista.lastElementChild) {
    lista.removeChild(lista.lastElementChild);
  }
});
//4.Cambiar el texto de un título (h1) cuando el ratón pase por encima.
const title = document.getElementById("title");
const originalTitle = title.textContent;

title.addEventListener("mouseover", () => {
  title.textContent = "¡Has pasado el ratón por encima!";
});
title.addEventListener("mouseout", () => {
  title.textContent = originalTitle;
});
//5.Ocultar y mostrar un div con un botón.
const toggleButton = document.createElement("button");
toggleButton.textContent = "Ocultar/Mostrar Div";
document.body.appendChild(toggleButton);

toggleButton.addEventListener("click", () => {
  const mainDiv = document.querySelector(".old-div");
  if (mainDiv.style.display === "none") {
    mainDiv.style.display = "block";
  } else {
    mainDiv.style.display = "none";
  }
});