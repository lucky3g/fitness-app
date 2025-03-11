// Main application logic
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the app
    StorageManager.initializeApp();
    
    // Generate days grid
    generateDaysGrid();
    
    // Update progress display
    updateProgressDisplay();
    
    // Event listeners
    const viewProgressBtn = document.getElementById('view-progress-btn');
    if (viewProgressBtn) {
        viewProgressBtn.addEventListener('click', function() {
            window.location.href = 'progress.html';
        });
    }
});

// Generate days grid for the main page
function generateDaysGrid() {
    const daysGrid = document.getElementById('days-grid');
    if (!daysGrid) return;
    
    const completedDays = StorageManager.getCompletedDays();
    
    daysGrid.innerHTML = '';
    for (let i = 1; i <= 30; i++) {
        const dayCard = document.createElement('div');
        dayCard.className = `day-card${completedDays.includes(i) ? ' completed' : ''}`;
        dayCard.innerHTML = `
            <div class="day-number">${i}</div>
            <div class="day-label">Day</div>
            ${completedDays.includes(i) ? '<div class="day-status">Completed</div>' : ''}
        `;
        
        dayCard.addEventListener('click', function() {
            window.location.href = `daily-exercise.html?day=${i}`;
        });
        
        daysGrid.appendChild(dayCard);
    }
}

// Update progress display on the main page
function updateProgressDisplay() {
    const progressText = document.getElementById('progress-text');
    const progressBar = document.getElementById('progress-bar');
    
    if (!progressText || !progressBar) return;
    
    const completedDays = StorageManager.getCompletedDays();
    
    progressText.textContent = `Progress: ${completedDays.length}/30 days completed`;
    progressBar.style.width = `${(completedDays.length / 30) * 100}%`;
}
