const copyBtn = document.querySelector(".copy-btn");
const textarea = document.querySelector("textarea");

copyBtn.addEventListener("click", () => {
    textarea.select();
    document.execCommand("copy");
    copyBtn.innerHTML = "<i class='fas fa-check'></i>";
    copyBtn.style.background = "#28c742";
    copyBtn.style.color = "#fff";
    document.getElementById("alert").style.display = "block";
    setTimeout(() => {
        document.getSelection().removeAllRanges();
        copyBtn.innerHTML = "<i class='fas fa-copy'></i>";
        copyBtn.style.background = "";
        copyBtn.style.color = "";
        document.getElementById("alert").style.display = "none";
    }, 3000);
});