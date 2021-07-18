document.addEventListener("DOMContentLoaded", function (event) {
  const modal = document.querySelector(".modal");
  const modalBtn = document.querySelectorAll("[data-toggle=modal");
  const switchModal = () => {
    modal.classList.toggle("modal--visible");
  };
  const closeBtn = document.querySelector(".modal__close");

  modalBtn.forEach((element) => {
    element.addEventListener("click", switchModal);
  });
  closeBtn.addEventListener("click", switchModal);
});
