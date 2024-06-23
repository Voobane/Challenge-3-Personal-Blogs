document.addEventListener('DOMContentLoaded', (event) => {
    const themeSwitcher = document.getElementById('themeToggle');
    
    // Check for saved user preference, if any, on load of the website
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.body.classList.add(currentTheme);
        if (currentTheme === 'dark-mode') {
            themeSwitcher.checked = true;
        }
    } else {
        document.body.classList.add('light-mode'); // Ensure light-mode by default
    }

    // Listen for the switcher to be clicked and then toggle the theme
    themeSwitcher.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.replace('light-mode', 'dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            document.body.classList.replace('dark-mode', 'light-mode');
            localStorage.setItem('theme', 'light-mode');
        }
    });
});
