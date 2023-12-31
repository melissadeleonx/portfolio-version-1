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
