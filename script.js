document.getElementById("icon-mode").addEventListener("click", modeChange);

function modeChange() {
    let doc = document.getElementById("mode");
    let icon1 = document.getElementById("icon-mode1");
    if (doc.className === "light") {
        doc.classList.replace("light", "dark");
        icon1.classList.replace("light", "dark");
    } else {
        doc.classList.replace("dark", "light");
    }
}