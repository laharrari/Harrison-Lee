let theme = localStorage.getItem("theme");

if (theme === null) {
    setTheme("light");
} else {
    setTheme(theme);
}

let themeDots = document.getElementsByClassName("theme-dot");

for (var i = 0; i < themeDots.length; i++) {
    themeDots[i].addEventListener('click', function() {
        let mode = this.dataset.mode;
        setTheme(mode);
    })
}

function setTheme(mode) {
    if (mode === "light") {
        document.getElementById("theme-style").href = "default.css";
        document.getElementById("social_img").src = "./images/light_social.png"
        document.body.style.backgroundColor = "#eaeaea";
    }

    if (mode === "dark") {
        document.getElementById("theme-style").href = "dark.css";
        document.getElementById("social_img").src = "./images/dark_social.jpg"
        document.body.style.backgroundColor = "#23272A";
    }

    localStorage.setItem("theme", mode);
}