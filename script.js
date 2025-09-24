// Toggle mobile menu
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('active');
});

// Sample image data (replace with your own image URLs)
const images = [
    'https://via.placeholder.com/600x400?text=Art+1',
    'https://via.placeholder.com/600x400?text=Art+2',
    'https://via.placeholder.com/600x400?text=Art+3',
    'https://via.placeholder.com/600x400?text=Art+4',
    'https://via.placeholder.com/600x400?text=Art+5',
    'https://via.placeholder.com/600x400?text=Art+6'
];

// Load images into gallery
const galleryContainer = document.getElementById('gallery-container');

images.forEach(image => {
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');
    galleryItem.innerHTML = `<img src="${image}" alt="Gallery Image">`;
    galleryContainer.appendChild(galleryItem);
});
