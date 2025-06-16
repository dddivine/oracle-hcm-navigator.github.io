const zoomableImages = document.querySelectorAll('img[data-zoomable]');
const imageZoomModal = document.getElementById('imageZoomModal');
const zoomedImage = document.getElementById('zoomedImage');
const closeButton = document.querySelector('.zoom-modal .close-button');

zoomableImages.forEach(img => {
    img.addEventListener('click', function() {
        imageZoomModal.classList.add('active');
        zoomedImage.src = this.src; 
    });
});


closeButton.addEventListener('click', function() {
    imageZoomModal.classList.remove('active'); 
});


imageZoomModal.addEventListener('click', function(event) {
    
    if (event.target === imageZoomModal) {
        imageZoomModal.classList.remove('active');
    }
});


document.addEventListener('keydown', function(event) {
    if (event.key === "Escape" && imageZoomModal.classList.contains('active')) {
        imageZoomModal.classList.remove('active');
    }
});