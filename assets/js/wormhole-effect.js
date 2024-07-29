document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('wormhole-effect-container');
    
    if (!container) return;

    const createWormholeEffect = () => {
        const wormholeDiv = document.createElement('div');
        wormholeDiv.className = 'wormhole-effect';

        // Make the wormhole effect act like a button
        wormholeDiv.addEventListener('click', () => {
            document.querySelector('#work-experience').scrollIntoView({
                behavior: 'smooth',
            });
        });

        // Optional: Draggable functionality
        let isDragging = false;
        let offsetX, offsetY;

        wormholeDiv.addEventListener('mousedown', (e) => {
            isDragging = true;
            offsetX = e.clientX - wormholeDiv.getBoundingClientRect().left;
            offsetY = e.clientY - wormholeDiv.getBoundingClientRect().top;
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        });

        function onMouseMove(e) {
            if (!isDragging) return;
            wormholeDiv.style.left = `${e.clientX - offsetX}px`;
            wormholeDiv.style.top = `${e.clientY - offsetY}px`;
        }

        function onMouseUp() {
            isDragging = false;
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }

        container.appendChild(wormholeDiv);
    };

    // Initialize the wormhole effect
    createWormholeEffect();
});
