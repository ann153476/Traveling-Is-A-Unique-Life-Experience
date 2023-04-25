(() => {
  const refs = {
    openModalBtn: document.querySelectorAll("[data-modal-open]"),
    closeModalBtn: document.querySelectorAll("[data-modal-close]"),
    modalLearnMore: document.querySelector("[data-modal-learn-more]"),
    modalForest: document.querySelector("[data-modal-forest]"),
    modalSea: document.querySelector("[data-modal-sea]"),
    modalMountain: document.querySelector("[data-modal-mountain]"),
    modalCall: document.querySelector("[data-modal-call]"),
  };

  refs.openModalBtn.forEach((card) =>
    card.addEventListener("click", toggleModal)
  );
  refs.closeModalBtn.forEach((card) =>
    card.addEventListener("click", toggleModal)
  );

  function toggleModal(e) {
    const esc = document.getElementById("esc");
    esc.play();
    switch (e.target.id) {
      case "learn_more":
        refs.modalLearnMore.classList.toggle("is-hidden");
        break;
      case "f":
        refs.modalForest.classList.toggle("is-hidden");
        break;
      case "s":
        refs.modalSea.classList.toggle("is-hidden");
        break;
      case "m":
        refs.modalMountain.classList.toggle("is-hidden");
        break;
      case "submit":
        refs.modalCall.classList.toggle("is-hidden");
        break;

      default:
        console.log("error in switch");
    }
  }
})();
