document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal-lupa');
    const imgZoom = document.getElementById('imagen-zoom');
    const btnCerrar = document.querySelector('.cerrar-lupa');

<<<<<<< Updated upstream
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
=======
    // Seleccionamos todas las cards que usan tu nueva clase unificada
    const tarjetas = document.querySelectorAll('.class-catalogo');

    tarjetas.forEach(tarjeta => {
        tarjeta.addEventListener('click', (e) => {
            // Evitamos que el clic en un enlace (como en Nuestras Colecciones) 
            // interfiera con la apertura del modal si así lo deseas
            // e.preventDefault(); 

            const imagenOriginal = tarjeta.querySelector('img');
            if (imagenOriginal) {
                imgZoom.src = imagenOriginal.src; // Captura la ruta de la imagen
                modal.style.display = 'flex'; // Muestra el modal
                document.body.style.overflow = 'hidden'; // Bloquea el scroll de la página
            }
        });
    });

    // Función para cerrar el modal
    const cerrarModal = () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Devuelve el scroll a la página
    };

    btnCerrar.addEventListener('click', cerrarModal);

    // Cerrar si se hace clic fuera de la imagen (en el fondo oscuro)
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            cerrarModal();
        }
    });
>>>>>>> Stashed changes
});