// Dashboard specific functionality
function initializeDashboard() {
    // Inventory management
    const inventoryItems = document.querySelectorAll('.inventory-item');
    inventoryItems.forEach(item => {
        item.addEventListener('click', function() {
            alert('Opening inventory management for: ' + this.querySelector('span').textContent);
        });
    });

    // Order status updates
    const orderItems = document.querySelectorAll('.order-item');
    orderItems.forEach(item => {
        item.addEventListener('click', function() {
            const orderId = this.querySelector('small').textContent.split('#')[1].split(' ')[0];
            alert('Viewing order details for: ' + orderId);
        });
    });

    // Quick action buttons
    const quickActions = document.querySelectorAll('.quick-action-btn');
    quickActions.forEach(action => {
        action.addEventListener('click', function() {
            const actionText = this.querySelector('span').textContent;
            alert('Performing action: ' + actionText);
        });
    });
}

// Initialize dashboard when page loads
if (document.body.classList.contains('dashboard-page')) {
    document.addEventListener('DOMContentLoaded', initializeDashboard);
}
