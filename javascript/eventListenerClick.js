const $element = document.getElementById("element");

/**
 * Agregamos a un elemento del DOM
 * un evento cuando hacemos click sobre el
 */
$element.addEventListener("click", (event) => {
  console.log(event);
  // Objeto con la informacion del evento
  // que acabamos de ejecutar.
});
