// ================================================================
// FUNCIONES DE NAVEGACIÓN (si se necesitan funciones adicionales)
// ================================================================

// Navegación con historial (opcional)
function navegarA(seccion) {
    // Guarda el estado en el historial
    history.pushState({ seccion: seccion }, '', `#${seccion}`);
    cargarSeccion(seccion);
}

// Maneja el evento de retroceso/adelante del navegador
window.addEventListener('popstate', function(event) {
    if (event.state && event.state.seccion) {
        cargarSeccion(event.state.seccion);
    } else {
        volverInicio();
    }
});

// Detecta si hay un hash en la URL al cargar
window.addEventListener('load', function() {
    const hash = window.location.hash.substring(1);
    if (hash && ['hilar', 'planeta', 'papiro'].includes(hash)) {
        // Espera un momento para que todo esté cargado
        setTimeout(() => {
            document.getElementById('btnHoja').click();
            setTimeout(() => {
                cargarSeccion(hash);
            }, 300);
        }, 300);
    }
});