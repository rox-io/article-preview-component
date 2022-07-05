const share = document.querySelectorAll("div.share-icon");
const socialLinks = document.querySelector("div.social-links-container");
const authorCard = document.querySelector("div.author-details");

for(let icon of share) {
    icon.addEventListener("click", () => {
        socialLinks.classList.toggle("display-social-links");
        authorCard.classList.toggle("toggle-active");
    })
}
