const formulario = document.getElementById("formularioContacto");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const interes = document.getElementById("interes").value;

    if (!nombre || !telefono || !interes) {
        alert("Por favor completa todos los campos.");
        return;
    }

    const numeroWhatsApp = "522228387082";

    const mensaje =
        "Hola, CEPM.%0A%0A" +
        "Me interesa recibir información.%0A%0A" +
        "👤 Nombre: " + encodeURIComponent(nombre) + "%0A" +
        "📱 Teléfono: " + encodeURIComponent(telefono) + "%0A" +
        "🎓 Me interesa: " + encodeURIComponent(interes);

    const url =
        "https://wa.me/" + numeroWhatsApp +
        "?text=" + mensaje;

    window.open(url, "_blank");

});