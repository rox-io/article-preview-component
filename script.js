const shareBtn = document.querySelectorAll("div.share-icon");
const socialLinks = document.querySelector("div.share-sec");

// ON CLICK TOGGLE SHARE CARD

for (let btn of shareBtn) {
    btn.addEventListener("click", () => {
        socialLinks.classList.toggle("toggle-share-sec");
    })
}
