const setup = () => {
    const text = document.getElementById("inputText").value;
    const start = Number(document.getElementById("startIndex").value);
    const end = Number(document.getElementById("endIndex").value);

    document.getElementById("output").innerText =
        start >= 0 && end > start && end <= text.length ? text.substring(start, end) : "(geen output)";
};
window.addEventListener("load", setup);