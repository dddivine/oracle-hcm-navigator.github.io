// script.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Create the Lightbox HTML structure dynamically
    const lightboxHTML = `
        <div id="lightbox-overlay">
            <span id="lightbox-close">&times;</span>
            <img src="" alt="Zoomed image">
        </div>
    `;
    // Insert the lightbox structure just before the closing </body> tag
    document.body.insertAdjacentHTML('beforeend', lightboxHTML);

    // 2. Get references to the Lightbox elements
    const lightboxOverlay = document.getElementById('lightbox-overlay');
    const lightboxImage = lightboxOverlay.querySelector('img');
    const lightboxClose = document.getElementById('lightbox-close');

    // 3. Select all images that you want to be zoomable
    // We'll target all images within the .instructions sections
    const zoomableImages = document.querySelectorAll('.instructions img');

    // 4. Add click event listeners to each zoomable image
    zoomableImages.forEach(image => {
        // Change cursor to indicate it's clickable
        image.style.cursor = 'zoom-in';

        image.addEventListener('click', () => {
            // Set the source of the lightbox image to the clicked image's source
            lightboxImage.src = image.src;
            // Set the alt text for accessibility
            lightboxImage.alt = image.alt ? `Zoomed view of: ${image.alt}` : 'Zoomed image';

            // Add the 'active' class to show the lightbox
            lightboxOverlay.classList.add('active');
            // Prevent scrolling on the body when lightbox is active
            document.body.style.overflow = 'hidden';
        });
    });

    // 5. Add event listeners to close the lightbox
    // Clicking anywhere on the overlay or the close button
    lightboxOverlay.addEventListener('click', (event) => {
        // Check if the click was directly on the overlay or the close button
        if (event.target === lightboxOverlay || event.target === lightboxClose) {
            lightboxOverlay.classList.remove('active'); // Hide lightbox
            document.body.style.overflow = ''; // Restore scrolling on the body
        }
    });

    // Closing with the ESC key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && lightboxOverlay.classList.contains('active')) {
            lightboxOverlay.classList.remove('active'); // Hide lightbox
            document.body.style.overflow = ''; // Restore scrolling
        }
    });
});