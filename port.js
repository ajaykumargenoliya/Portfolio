document.querySelectorAll(".copy-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        console.log("clicked");

        navigator.clipboard.writeText(btn.dataset.copy)
            .then(() => alert("Copied!"))
            .catch(err => console.error(err));
    });
});