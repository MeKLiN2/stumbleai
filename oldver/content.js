// content.js

// Define the classes you want to block
const classesToBlock = ["head_container", "content_wrapper"];

// Function to remove elements by class name
function removeElementsByClass(className) {
    const elements = document.getElementsByClassName(className);
    for (let i = 0; i < elements.length; i++) {
        elements[i].remove();
    }
}

// Remove elements with specified classes
classesToBlock.forEach(className => {
    removeElementsByClass(className);
});

// Log a message to the console to indicate that the content script has executed
console.log("Content script executed");