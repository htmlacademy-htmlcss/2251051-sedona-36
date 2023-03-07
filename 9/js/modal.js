const modalOpenButton = document.querySelector(".find-button");
const modalHeaderOpenButton = document.querySelector(".want-here-button");
const modalContainer = document.querySelector(".modal-container");
const modalCloseButton = document.querySelector(".modal-button");

function openModal() {
    if (modalContainer.classList.contains("modal-close")) {
        modalContainer.classList.remove("modal-close");
    }
}

function closeModal() {
    modalContainer.classList.add("modal-close");
}

modalOpenButton.addEventListener("click", openModal);
modalHeaderOpenButton.addEventListener("click", openModal);
modalCloseButton.addEventListener("click", closeModal);
