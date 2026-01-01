function toggleDarkMode() {
    document.body.classList.toggle("dark-theme");

    const isDark = document.body.classList.contains("dark-theme");

    if (isDark) {
        document.getElementById("sunImage").src = "img/sun.png";
    } 
    else
     {
        document.getElementById("sunImage").src = "img/dark-sun.png";
    }
}