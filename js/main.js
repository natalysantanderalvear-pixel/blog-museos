// ================================================================
// VARIABLES GLOBALES
// ================================================================

const homeScreen = document.getElementById('homeScreen');
const threeButtons = document.getElementById('threeButtons');
const contenedorSecciones = document.getElementById('contenedorSecciones');

// ================================================================
// FUNCIÓN PARA VOLVER AL INICIO
// ================================================================

function volverInicio() {
    // Muestra la pantalla de inicio
    homeScreen.style.display = 'flex';
    // Oculta los 3 botones
    threeButtons.classList.remove('visible');
    // Oculta todas las secciones
    const secciones = document.querySelectorAll('.contenido-seccion');
    secciones.forEach(el => el.classList.remove('activo'));
    // Limpia el contenedor de secciones
    contenedorSecciones.innerHTML = '';
    // Ocultar botón flotante
    const btnFlotante = document.getElementById('btnFlotanteVolver');
    if (btnFlotante) btnFlotante.style.display = 'none';
    // Scroll suave al inicio
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ================================================================
// FUNCIÓN PARA CARGAR UNA SECCIÓN
// ================================================================

function cargarSeccion(nombre) {
    // Oculta la pantalla de inicio
    homeScreen.style.display = 'none';
    // Oculta los 3 botones
    threeButtons.classList.remove('visible');
    
    // Mostrar botón flotante
    const btnFlotante = document.getElementById('btnFlotanteVolver');
    if (btnFlotante) btnFlotante.style.display = 'flex';
    
    // Carga el contenido desde el archivo HTML correspondiente
    fetch(`secciones/${nombre}.html`)
        .then(response => response.text())
        .then(html => {
            contenedorSecciones.innerHTML = html;
            
            // Agrega los botones de navegación al contenido
            const seccion = document.querySelector('.contenido-seccion');
            if (seccion) {
                seccion.classList.add('activo');
                
                // Agrega botones de control si no existen
                if (!seccion.querySelector('.botones-accion')) {
                    const divBotones = document.createElement('div');
                    divBotones.className = 'botones-accion';
                    divBotones.innerHTML = `
                        <button class="btn-control" onclick="cerrarSeccion()">
                            ✕ Cerrar sección
                        </button>
                        <button class="btn-volver-inicio" onclick="volverInicio()">
                            🏠 Volver al inicio
                        </button>
                    `;
                    seccion.appendChild(divBotones);
                }
            }
            
            // Desplazar al contenido
            setTimeout(() => {
                contenedorSecciones.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 300);
        })
        .catch(error => {
            console.error('Error al cargar la sección:', error);
            contenedorSecciones.innerHTML = `
                <div class="contenido-seccion activo">
                    <h3>⚠️ Error</h3>
                    <p>No se pudo cargar el contenido. Verifica que el archivo existe.</p>
                    <div class="botones-accion">
                        <button class="btn-volver-inicio" onclick="volverInicio()">
                            🏠 Volver al inicio
                        </button>
                    </div>
                </div>
            `;
        });
}

// ================================================================
// FUNCIÓN PARA CERRAR SECCIÓN
// ================================================================

function cerrarSeccion() {
    contenedorSecciones.innerHTML = '';
    threeButtons.classList.add('visible');
    threeButtons.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // Ocultar botón flotante
    const btnFlotante = document.getElementById('btnFlotanteVolver');
    if (btnFlotante) btnFlotante.style.display = 'none';
}

// ================================================================
// EVENTO DEL BOTÓN HOJA
// ================================================================

document.getElementById('btnHoja').addEventListener('click', function() {
    homeScreen.style.display = 'none';
    threeButtons.classList.add('visible');
    threeButtons.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// ================================================================
// EVENTOS DE REINICIO (doble clic)
// ================================================================

document.querySelector('footer').addEventListener('dblclick', volverInicio);
document.querySelector('header h1').addEventListener('dblclick', volverInicio);

// ================================================================
// TECLA ESCAPE
// ================================================================

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        volverInicio();
    }
});