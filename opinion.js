const formulario = document.getElementById("formulario-opinion");
const lista = document.getElementById("lista-opiniones");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const titulo = document.getElementById("titulo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !titulo || !mensaje) {
        alert("Completa todos los campos.");
        return;
    }

    const tarjeta = document.createElement("article");
    tarjeta.classList.add("opinion-publicada");

    const nombreElemento = document.createElement("h4");
    nombreElemento.textContent = nombre;

    const tituloElemento = document.createElement("h3");
    tituloElemento.textContent = titulo;

    const mensajeElemento = document.createElement("p");
    mensajeElemento.textContent = mensaje;

    tarjeta.append(nombreElemento, tituloElemento, mensajeElemento);
    lista.prepend(tarjeta);

    formulario.reset();
});