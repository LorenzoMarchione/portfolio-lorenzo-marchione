document.querySelectorAll('.scroll-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const targetId = btn.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
// Validación y funcionamiento del formulario
const form = document.querySelector('#contacto form');
const originalFormHTML = form.innerHTML; // Guardo el HTML original
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita el envío por defecto

    let nombre = form.querySelector('#nombre input').value.trim();
    let email = form.querySelector('#input-email').value.trim();
    let mensaje = form.querySelector('textarea[name="mensaje"]').value.trim();

    //me aseguro de que los campos no estén vacíos
    if (!nombre) {
        const nombrehtml = document.getElementById('nombre');
        nombrehtml.innerHTML = `
            <h4 class="font-semibold" id="nombre">Nombre</h4>
            <input class="bg-white border border-red-600 rounded-sm" type="text" placeholder="Nombre">
            <p class="text-red-600">Ingrese su nombre.</p>
        `;
        return;
    }
    else if (!email) {
        const mailhtml = document.getElementById('email');
        mailhtml.innerHTML = `
            <h4 class="font-semibold" id="email">Email</h4>
            <input class="bg-white border border-red-600 rounded-sm" id="input-email" type="text" placeholder="Email">
            <p class="text-red-600">Ingrese su email.</p>
        `;
        return;
    }
    else if (!mensaje) {
        const mensajehtml = document.getElementById('mensaje');
        mensajehtml.innerHTML = `
            <h4 class="font-semibold">Mensaje</h4>
            <textarea class="w-full resize-none bg-white border border-red-600 rounded-sm" name="mensaje" rows="5" placeholder="Escribe tu mensaje aquí"></textarea>
            <p class="text-red-600">Ingrese su mensaje.</p>
        `;
        return;
    }
    // Validación de email simple (solo verifico formato no verifico si existe)
    if (!/\S+@\S+\.\S+/.test(email)) {
        const mailhtml = document.getElementById('email');
        mailhtml.innerHTML = `
            <h4 class="font-semibold" id="email">Email</h4>
            <input class="bg-white border border-red-600 rounded-sm" id="input-email" type="text" placeholder="Email" required>
            <p class="text-red-600">Ingrese un email válido.</p>
        `;
        return;
    }
    // Restauro el HTML original del formulario y muestro un mensaje de éxito
    form.innerHTML = originalFormHTML; 
    mensajehtml = document.getElementById('mensaje');
    mensajehtml.innerHTML = `
        <h4 class="font-semibold">Mensaje</h4>
        <textarea class="w-full resize-none bg-white border border-black rounded-sm" name="mensaje" rows="5" placeholder="Escribe tu mensaje aquí"></textarea>
        <p class="text-white p-2 bg-green-600 rounded-sm mb-2">Mensaje enviado correctamente.</p>
    `;
});