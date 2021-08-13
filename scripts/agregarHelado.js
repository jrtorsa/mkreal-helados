console.log("*******AGREGAR HELADO********");

function agregarHelado(event) {
  event.preventDefault();
  console.log("agregar helado", event);
  const nombre = event.target[0].value;
  const sabor = event.target[1].value;
  const cantidad = event.target[2].value;
  const precio = event.target[3].value;

  let vHelados = [];
  const helado = {
    codigo: vHelados.length + 1,
    nombre,
    sabor,
    cantidad,
    precio
  };

  vHelados.push(helado);
  localStorage.setItem("vHelados", JSON.stringify(vHelados));
}

const form = document.getElementsByTagName("form");
form[0].addEventListener("submit", agregarHelado);
