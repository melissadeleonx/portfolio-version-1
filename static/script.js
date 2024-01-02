// To make the light and dark mode toggle work for every pages
document.addEventListener('DOMContentLoaded', function () {
    var modeToggleBtn = document.getElementById('modeToggle');
    var body = document.body;

    function toggleDarkMode() {
        body.classList.toggle('dark-mode');
        updateDarkModePreference();
    }

    function updateDarkModePreference() {
        var isDarkMode = body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
    }

    if (modeToggleBtn) {
        modeToggleBtn.addEventListener('click', toggleDarkMode);
    } else {
        console.error("Element with ID 'modeToggle' not found.");
    }

    var storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode === 'true') {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
});

// Function to update the displayed time
function updateTime() {
    // Get the current time
    const now = new Date();

    // Format the time as HH:MM:SS
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    // Update the content of the element with the formatted time
    document.getElementById('realtime-clock').innerText = `${hours}:${minutes}:${seconds}`;
}

// Call the updateTime function every second (1000 milliseconds)
setInterval(updateTime, 1000);

// Initial call to display the time immediately
updateTime();
