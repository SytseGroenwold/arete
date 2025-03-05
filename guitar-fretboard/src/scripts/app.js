const strings = 6;
const frets = 21;

const fretboard = document.querySelector('.fretboard');

for (let i = 0; i < strings; i++) {
    const string = document.createElement('div');
    string.className = 'string';
    
    for (let j = 0; j <= frets; j++) {
        const fret = document.createElement('div');
        fret.className = 'fret';
        
        const dot = document.createElement('div');
        dot.className = 'dot';
        fret.appendChild(dot);
        
        if (i === 5 && j === 0) {
            const number = document.createElement('div');
            number.className = 'fret-number';
            number.textContent = '0';
            fret.appendChild(number);
        }
        
        if (i === 5 && j > 0) {
            const number = document.createElement('div');
            number.className = 'fret-number';
            number.textContent = j;
            fret.appendChild(number);
        }
        
        fret.addEventListener('click', () => {
            fret.classList.toggle('active');
        });
        
        string.appendChild(fret);
    }
    
    fretboard.appendChild(string);
}