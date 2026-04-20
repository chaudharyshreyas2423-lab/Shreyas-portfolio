document.addEventListener('DOMContentLoaded', () => {
    const visualizer = document.getElementById('visualizer');
    const btn = document.getElementById('action-btn');

    // Create animated bars for visual flair
    for (let i = 0; i < 15; i++) {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = Math.random() * 100 + '%';
        visualizer.appendChild(bar);
    }

    // Function to "re-sequence" data
    const updateVisuals = () => {
        const bars = document.querySelectorAll('.bar');
        bars.forEach(bar => {
            bar.style.height = Math.random() * 100 + '%';
            bar.style.opacity = Math.random();
        });
    };

    btn.addEventListener('click', () => {
        btn.innerText = "Sequencing...";
        const interval = setInterval(updateVisuals, 150);
        
        setTimeout(() => {
            clearInterval(interval);
            btn.innerText = "Sequence Complete";
        }, 3000);
    });
});
