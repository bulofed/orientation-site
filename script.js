document.getElementById("icon-mode2").addEventListener("click", modeChange);

function modeChange() {
    let doc = document.getElementById("mode");
    let icon1 = document.getElementById("icon-mode1");
    let icon2 = document.getElementById("icon-mode2");
    if (doc.className === "light") {
        doc.classList.replace("light", "dark");
        icon2.classList.replace("lune", "soleil");
        icon1.classList.replace("lang-light", "lang-dark");
    } else {
        doc.classList.replace("dark", "light");
        icon2.classList.replace("soleil", "lune");
        icon1.classList.replace("lang-dark", "lang-light");
    }
}