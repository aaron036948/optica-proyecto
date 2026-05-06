document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal-lupa');
    const imgZoom = document.getElementById('imagen-zoom');
    const btnCerrar = document.querySelector('.cerrar-lupa');

    // Selecciona todas tus tarjetas de catálogo
    document.querySelectorAll('.car-catalogo').forEach(card => {
        card.addEventListener('click', () => {
            const imgSrc = card.querySelector('img').src; // Captura la imagen de la card
            imgZoom.src = imgSrc; // La pone en el modal
            modal.style.display = 'flex'; // Muestra el modal
        });
    });

    // Cerrar al tocar la X o fuera de la imagen
    btnCerrar.onclick = () => modal.style.display = 'none';
    window.onclick = (e) => { if (e.target == modal) modal.style.display = 'none'; };
});