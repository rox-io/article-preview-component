const shareBtn = document.querySelectorAll("div.share-icon");
const socialLinks = document.querySelector("div.card-footer-b");
const authorCard = document.querySelector("div.card-footer-a");

for(let btn of shareBtn) {
    btn.addEventListener("click", () => {
        socialLinks.classList.toggle("toggle-card-footer-b");
        authorCard.classList.toggle("toggle-card-footer-a");
    })
}

