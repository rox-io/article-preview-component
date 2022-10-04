const shareBtn = document.querySelectorAll("div.share-icon");
const socialLinks = document.querySelector("div.card-footer-b");

// ON CLICK TOGGLE SHARE CARD

for (let btn of shareBtn) {
    btn.addEventListener("click", () => {
        socialLinks.classList.toggle("toggle-card-footer-b");
    })
}
