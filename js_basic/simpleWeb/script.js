document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.getElementById("text");
    const info = document.getElementById("info");
    const changeColorButton = document.getElementById("changeColor");
    const toggleTextButton = document.getElementById("toggleText");

    changeColorButton.addEventListener("click", () => {
        textElement.classList.toggle("red");
        let len = textElement.classList.length;
        info.value = len;
        document.getElementById("info").value = len;
    });

    toggleTextButton.addEventListener("click", () => {
        textElement.classList.toggle("hidden");
    });
});
