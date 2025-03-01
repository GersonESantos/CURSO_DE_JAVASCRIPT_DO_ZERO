const ola = document.getElementById('ola');

// Array of style changes as functions
const styleSteps = [
    () => ola.innerHTML = 'Olá, mundo!',
    () => ola.style.color = 'red',
    () => ola.style.fontSize = '50px',
    () => ola.style.fontFamily = 'Arial',
    () => ola.style.fontWeight = 'bold',
    () => ola.style.textAlign = 'center',
    () => ola.style.marginTop = '50px',
    () => ola.style.marginBottom = '50px',
    () => ola.style.padding = '20px',
    () => ola.style.border = '2px solid black',
    () => ola.style.borderRadius = '10px',
    () => ola.style.backgroundColor = 'yellow',
    () => ola.style.boxShadow = '5px 5px 5px black',
    () => ola.style.textShadow = '2px 2px 2px black',
    () => ola.style.transition = 'all 0.5s',
    () => ola.style.cursor = 'pointer',
    () => ola.style.userSelect = 'none',
    () => ola.style.transformOrigin = 'center',
    () => ola.style.transform = 'rotate(0deg)', // Start position for rotation
    () => ola.style.transition = 'all 1s',     // Transition for smooth rotation
    () => ola.style.transform = 'rotate(360deg)' // Final rotation
];

// Counter to track the current step
let step = 0;

// Add click event listener
ola.addEventListener('click', () => {
    if (step < styleSteps.length) {
        styleSteps[step](); // Apply the current style
        step++; // Move to the next step
    } else {
        // Reset to the beginning
        step = 0;
        ola.innerHTML = 'Click me!';
        // Clear all styles to start fresh
        ola.style = ''; // Resets all inline styles
    }
});