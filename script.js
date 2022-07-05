const share = document.querySelectorAll("div.share-icon");

for(let icon of share) {
    icon.addEventListener("click", () => {
        socialLinks.classList.toggle("display-social-links");
        authorCard.classList.toggle("toggle-active");
    })
}
const shareBtn = document.querySelectorAll("div.share-icon");
const socialLinks = document.querySelector("div.card-footer-b");
const authorCard = document.querySelector("div.card-footer-a");

for(let btn of shareBtn) {
    btn.addEventListener("click", () => {
        socialLinks.classList.toggle("toggle-card-footer-b");
        authorCard.classList.toggle("toggle-card-footer-a");
    })
}

