const shareBtn = document.querySelector("div.share-icon");
const socialLinks = document.querySelector("div.share-sec");
const iconImage = document.querySelector(".share-icon img");

// ON CLICK TOGGLE SHARE CARD

    shareBtn.addEventListener("click", () => {
        socialLinks.classList.toggle("toggle-share-sec");
        shareBtn.classList.toggle("white-share-icon");
        iconImage.classList.toggle("white-share-icon-color");
    })



