document.addEventListener('DOMContentLoaded', function() {
    const images = [
        'images/playing-with-kids.jpg',
        'images/studying.jpg',
        'images/safety.jpg',
        'images/feeding.jpg',
        'images/cleaning.jpg'
    ];

    let currentImageIndex = 0;
    let autoChangeInterval;
    function startAutoChange() {
        autoChangeInterval = setInterval(() => {
            changeImage(images[currentImageIndex]);
            currentImageIndex = (currentImageIndex + 1) % images.length;
        }, 3000);
    }

    // Start the automatic image change
    startAutoChange();

    const listItems = document.querySelectorAll('.modern-list li');
    listItems.forEach((li, index) => {
        li.addEventListener('mouseenter', () => {
            changeImage(images[index]);
            clearInterval(autoChangeInterval);
            autoChangeInterval = null; // Clear the interval ID
        });
        li.addEventListener('mouseleave', () => {
            // Wait for a short while before resuming automatic image change
            setTimeout(() => {
                // Only restart the interval if it's not already running
                if (!autoChangeInterval) {
                    startAutoChange();
                }
            }, 1000); // 1 second delay before resuming auto change
        });
    });
    
    function changeImage(imageFileName) {
        document.querySelector('.image-container img').src = imageFileName;
    }
});
