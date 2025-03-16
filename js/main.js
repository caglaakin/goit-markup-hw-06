// Eklenen JavaScript
document.addEventListener("DOMContentLoaded", function () {
  // Mobil menü işlevselliği
  const burgerButton = document.getElementById("burgerButton");
  const closeMenuButton = document.getElementById("closeMenuButton");
  const mobileMenu = document.getElementById("mobileMenu");

  burgerButton.addEventListener("click", function () {
    mobileMenu.classList.add("is-open");
  });

  closeMenuButton.addEventListener("click", function () {
    mobileMenu.classList.remove("is-open");
  });
    
    // Modal işlevselliği
  const orderServiceButton = document.querySelector("modalOpen");
  const closeModalButton = document.getElementById("close-btn");
  const modalOverlay = document.getElementById("backdrop");

    orderServiceButton.addEventListener("click", function () {
    modalOverlay.classList.add("is-open");
  });

  closeModalButton.addEventListener("click", function () {
    modalOverlay.classList.remove("is-open");
  });
});