let isDragging = false;
let offsetX, offsetY;
let selectedElement = null;

const canvas = document.getElementById('canvas');

canvas.addEventListener('mousedown', (event) => {
    event.preventDefault();
    const clickedElement = event.target;
    if (clickedElement === canvas) {
        return;
    }
    isDragging = true;
    selectedElement = clickedElement;

    offsetX = event.clientX - selectedElement.getBoundingClientRect().left;
    offsetY = event.clientY - selectedElement.getBoundingClientRect().top;

    // console.log("1", event.clientX, event);
    // console.log("2", offsetX, offsetY);
    // console.log("3", selectedElement.getBoundingClientRect());

    selectedElement.style.zIndex = 999;

    // Calculate the initial position offset:-
    offsetX = event.clientX - selectedElement.getBoundingClientRect().left;
    offsetY = event.clientY - selectedElement.getBoundingClientRect().top;

    // Attach the element to the cursor:-
    selectedElement.style.position = 'fixed';
    selectedElement.style.pointerEvents = 'none';
    selectedElement.style.left = `${event.clientX - offsetX}px`;
    selectedElement.style.top = `${event.clientY - offsetY}px`;

    document.body.appendChild(selectedElement);
});

document.addEventListener('mousemove', (event) => {
    if (!isDragging || !selectedElement) return;

    selectedElement.style.left = `${event.clientX - offsetX}px`;
    selectedElement.style.top = `${event.clientY - offsetY}px`;
});

document.addEventListener('mouseup', () => {
    if (isDragging && selectedElement) {
        // Remove the element from the body and reposition it in the canvas
        document.body.removeChild(selectedElement);
        selectedElement.style.position = 'absolute';
        selectedElement.style.pointerEvents = 'auto';
        canvas.appendChild(selectedElement);

        // Reset the z-index to allow other elements to be dragged:-
        selectedElement.style.zIndex = 1;
        selectedElement = null;
    }

    isDragging = false;
});
