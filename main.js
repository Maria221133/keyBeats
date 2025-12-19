function main() {
    const pageTitle = document.getElementById('title');
    pageTitle.innerHTML = 'Keybeats';

    let keyGrid = document.getElementById('keyGrid');

    let keys = [
        'C','C#','D','D#','E',
        'F','F#','G','G#','A',
        'A#','B','C','C#','D',
        'D#','E','F','F#','G',
        'G#','A','A#','B','C'
    ];

    keys.forEach(label => {
        let key = document.createElement('button');
        key.className = 'key';
        key.textContent = label;

        key.addEventListener('mousedown', () => {
            key.classList.add('active');
            setTimeout(() => key.classList.remove('active'), 700);
        });

        key.addEventListener('mouseup', () => {
            key.classList.remove('active');
        });

        keyGrid.appendChild(key);
    });


}

window.onload = main;