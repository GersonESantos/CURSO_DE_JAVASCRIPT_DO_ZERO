const ola = document.getElementById('ola');

let delay = 0; // Starting delay

// Function to apply styles with a delay
function applyStyle(callback, ms) {
    setTimeout(callback, delay);
    delay += ms; // Increase delay for the next step
}

// Apply each style with a 500ms pause between them
applyStyle(() => ola.innerHTML = 'Olá, mundo!', 500);
applyStyle(() => ola.style.color = 'red', 500);
applyStyle(() => ola.style.fontSize = '50px', 500);
applyStyle(() => ola.style.fontFamily = 'Arial', 500);
applyStyle(() => ola.style.fontWeight = 'bold', 500);
applyStyle(() => ola.style.textAlign = 'center', 500);
applyStyle(() => ola.style.marginTop = '50px', 500);
applyStyle(() => ola.style.marginBottom = '50px', 500);
applyStyle(() => ola.style.padding = '20px', 500);
applyStyle(() => ola.style.border = '2px solid black', 500);
applyStyle(() => ola.style.borderRadius = '10px', 500);
applyStyle(() => ola.style.backgroundColor = 'yellow', 500);
applyStyle(() => ola.style.boxShadow = '5px 5px 5px black', 500);
applyStyle(() => ola.style.textShadow = '2px 2px 2px black', 500);
applyStyle(() => ola.style.transition = 'all 0.5s', 500);
applyStyle(() => ola.style.cursor = 'pointer', 500);
applyStyle(() => ola.style.userSelect = 'none', 500);
applyStyle(() => ola.style.transformOrigin = 'center', 500);
applyStyle(() => ola.style.transform = 'rotate(0deg)', 500); // Start at 0 degrees
applyStyle(() => ola.style.transition = 'all 1s', 500); // Transition for rotation
applyStyle(() => ola.style.transform = 'rotate(360deg)', 500); // Rotate fully