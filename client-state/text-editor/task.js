const getText = document.getElementById("editor");

getText.value = localStorage.getItem("text");
getText.oninput = () => {
    localStorage.setItem("text", getText.value)
}