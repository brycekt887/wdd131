
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.getElementById("closeModal");
const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach(img => {
    img.addEventListener("click", openModal);
});

closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", closeModalOnBackground);

function openModal(event) {
    modal.classList.add("active");
    modalImg.src = event.target.src;
}

function closeModal() {
    modal.classList.remove("active");
}

function closeModalOnBackground(event) {
    if (event.target === modal) {
        modal.classList.remove("active");
    }
}

const menuBtn = document.querySelector(".menu");
const navMenu = document.querySelector("nav ul");

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    navMenu.classList.toggle("show");
}