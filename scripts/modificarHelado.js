console.log("********MODIFICAR HELADO*******");

function modificarHelado(event) {
  event.preventDefault();

  let vHelados = localStorage.getItem("vHelados");
  console.log(vHelados);
}

// mostrar helados
function mostrarHelados() {
  let vHelados = JSON.parse(localStorage.getItem("vHelados"));

  let html = "<ul>";
  vHelados.forEach((item) => {
    html += `<li><input type="checkbox" value="${item.codigo}" onchange="llenarForm(this)" />${item.nombre}</li>`;
  });
  html += "</ul>";

  document.getElementById("contenedor-helados").innerHTML = html;
}

// llenar el form

function llenarForm(element) {
  console.log("llenar form", element);
  console.log("form", form[0]);
}

const form = document.getElementsByTagName("form");
form[0].addEventListener("submit", modificarHelado);

mostrarHelados();
