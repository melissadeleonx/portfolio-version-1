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
