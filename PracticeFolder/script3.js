
document.addEventListener('DOMContentLoaded', () => {
    const movable = document.getElementById('movable');
    let left = 50;
    let top = 50;

    function moveObject(event) {
        switch (event.key) {
            case 'ArrowUp':
                top -= 10;
                break;
            case 'ArrowDown':
                top += 10;
                break;
            case 'ArrowLeft':
                left -= 10;
                break;
            case 'ArrowRight':
                left += 10;
                break;
        }
        movable.style.left = `${left}px`;
        movable.style.top = `${top}px`;
    }

    document.addEventListener('keydown', moveObject);
});
