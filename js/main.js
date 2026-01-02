function openGame(gameName) {
    const modal = document.getElementById('gameModal');
    const frame = document.getElementById('gameFrame');
    frame.src = `games/${gameName}.html`;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeGame() {
    const modal = document.getElementById('gameModal');
    const frame = document.getElementById('gameFrame');
    modal.style.display = 'none';
    modal.classList.remove('zoomed');
    frame.src = '';
    frame.style.transform = 'scale(1)';
    document.body.style.overflow = 'auto';
}

function toggleFullscreen() {
    const modal = document.getElementById('gameModal');
    const frame = document.getElementById('gameFrame');
    
    if (modal.classList.contains('zoomed')) {
        modal.classList.remove('zoomed');
        frame.style.transform = 'scale(1)';
    } else {
        modal.classList.add('zoomed');
        frame.style.transform = 'scale(1.2)';
    }
}

// Close modal when clicking outside
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('gameModal');
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeGame();
        }
    });
    
    // Close with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeGame();
        }
    });
    
    const gameCards = document.querySelectorAll('.game-card:not(.coming-soon)');
    
    gameCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
});