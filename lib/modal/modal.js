document.addEventListener("DOMContentLoaded", function () {
  function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex"
  }

  function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none"
  }

  document.addEventListener("click", function(event) {
    if (event.target.closest('.openModal')) {
      event.preventDefault();
      const modalId = event.target.closest('.openModal').getAttribute('data-modal');
      openModal(modalId);
    } else if (event.target.closest('.close')) {
      event.preventDefault();
      const modalId = event.target.closest('.close').getAttribute('data-modal');
      closeModal(modalId);
    }
  })
});
