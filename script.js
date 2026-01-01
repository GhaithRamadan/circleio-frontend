function toggleDarkMode() {
    document.body.classList.toggle("dark-theme");

    const isDark = document.body.classList.contains("dark-theme");

    if (isDark) {
        document.getElementById("analyticsImage").src = "img/phone.png";
        document.getElementById("overviewImage").src = "img/overview-dark.png";
        document.getElementById("stockImage").src = "img/blackstock.jpg";
        document.getElementById("sunImage").src = "img/sun.png";
    } 
    else
     {
        document.getElementById("analyticsImage").src = "img/phone.png";
        document.getElementById("overviewImage").src = "img/overview.png";
        document.getElementById("stockImage").src = "img/stock.jpg";
        document.getElementById("sunImage").src = "img/dark-sun.png";
    }
}