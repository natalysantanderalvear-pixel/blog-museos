// ================================================================
// FUNCIONES ESPECÍFICAS DE CADA BOTÓN
// ================================================================

// Animaciones adicionales para botones
function animarBoton(selector) {
    const boton = document.querySelector(selector);
    if (boton) {
        boton.style.transform = 'scale(0.95)';
        setTimeout(() => {
            boton.style.transform = 'scale(1)';
        }, 200);
    }
}

// Efecto de click en botón hoja
document.addEventListener('DOMContentLoaded', function() {
    const btnHoja = document.getElementById('btnHoja');
    if (btnHoja) {
        btnHoja.addEventListener('click', function() {
            // Efecto de pulsación
            this.style.transform = 'rotate(-4deg) scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'rotate(-8deg) scale(1)';
            }, 150);
        });
    }
});

// Tooltips para botones (opcional)
const tooltips = {
    'hilar': 'Teoría de la Actividad: Leontiev y la mediación',
    'planeta': 'Pedagogía Crítica: Freire y Makarenko',
    'papiro': 'Epistemologías del Sur: Dussel y Boaventura'
};

function mostrarTooltip(seccion) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = tooltips[seccion] || '';
    tooltip.style.cssText = `
        position: fixed;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: #2d4a33;
        color: #f5f0e1;
        padding: 10px 20px;
        border-radius: 30px;
        font-size: 0.9rem;
        border: 2px solid #b8a48b;
        z-index: 1000;
        animation: fadeIn 0.3s ease;
    `;
    document.body.appendChild(tooltip);
    setTimeout(() => {
        tooltip.remove();
    }, 2000);
}