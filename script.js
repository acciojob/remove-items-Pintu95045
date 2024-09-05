document.querySelector('input[type="button"]').addEventListener('click', removeSelectedColor);

function removeSelectedColor() {
    const colorSelect = document.getElementById('colorSelect');
    if (colorSelect.selectedIndex !== -1) { // Check if an item is selected
        colorSelect.remove(colorSelect.selectedIndex);
    }
}
