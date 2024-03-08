const detectSystemTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";

const setHTMLTheme = () =>
    document.documentElement.setAttribute(
        "data-theme",
        detectSystemTheme(),
    );

setHTMLTheme();

window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => setHTMLTheme());