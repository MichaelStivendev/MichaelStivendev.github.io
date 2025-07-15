var themeToggleButton = document.querySelector(".toggle-mode");
var root = document.documentElement;

themeToggleButton.addEventListener("click", () => {
    const mode = root.dataset.theme;
    const newTheme = mode == "light" ? "dark":"light";
    root.dataset.theme = newTheme;
    localStorage.setItem("mode",newTheme)
});
