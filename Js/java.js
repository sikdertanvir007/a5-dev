
function updateDate() {
    const now = new Date();
    const options = { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', options);
    document.getElementById("current-date").textContent = dateString;
}

// Set the date on page load
updateDate();





// Theme Changer

document.addEventListener("DOMContentLoaded", function () {
// Select the theme button
const themeButton = document.querySelector("button img");

// Function to generate a random color
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Event listener for theme button click
themeButton.addEventListener("click", function () {
    document.body.style.backgroundColor = getRandomColor();
});
});



// Discover something new today section


document.getElementById("loadPage").addEventListener("click", function () {
window.location.href = "discover.html"; // Redirects to HTML 2
});



