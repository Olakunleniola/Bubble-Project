
function handleSubmit(e) {
    e.preventDefault()
    var enteredText = document.getElementById('text').value;
    // Do something with the entered text
    console.log("Entered text:", enteredText);
    drawText(enteredText);
}

document.querySelector('form').onsubmit = handleSubmit

// The code below will allow you to interact with the letters
bounceBubbles();