function toggleWishlist(btn, productId) {
    btn.classList.toggle('active');
    const icon = btn.querySelector('svg');
    if (btn.classList.contains('active')) {
        icon.style.fill = 'currentColor';
        // Logic to save to local storage or API would go here
        console.log('Added product ' + productId + ' to wishlist');
    } else {
        icon.style.fill = 'none';
        console.log('Removed product ' + productId + ' from wishlist');
    }
}
