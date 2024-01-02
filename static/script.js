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

      // real-time clock function
  function updateTime() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    const formattedTime = `${hours}:${minutes}:${seconds}`;

    // Update the content of the element with the current time
    document.getElementById("real-time-clock").innerText = formattedTime;
  }

  // Update the time initially
  updateTime();

  // Set up an interval to update the time every second
  setInterval(updateTime, 1000);
});


// Call the updateTime function every second (1000 milliseconds)
setInterval(updateTime, 1000);

// Initial call to display the time immediately
updateTime();
