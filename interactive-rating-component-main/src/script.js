(function () {
  const buttons = document.querySelectorAll(".rating-btn");
  const submitButton = document.getElementById("submit-rating");
  const ratingState = document.getElementById("rating-state");
  const thankYouState = document.getElementById("thank-you-state");
  const selectedRatingText = document.getElementById("selected-rating");
  let selectedRating = null;

  if (
    !buttons.length ||
    !submitButton ||
    !ratingState ||
    !thankYouState ||
    !selectedRatingText
  )
    return;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => {
        b.classList.remove("bg-white", "text-gray-dark");
        b.classList.add("bg-light-gray/15", "text-light-gray");
        b.setAttribute("aria-pressed", "false");
      });

      btn.classList.remove("bg-light-gray/15", "text-light-gray");
      btn.classList.add("bg-white", "text-gray-dark");
      btn.setAttribute("aria-pressed", "true");
      selectedRating = btn.textContent.trim();
    });

    btn.addEventListener("mousedown", (e) => e.preventDefault());
  });

  submitButton.addEventListener("click", () => {
    if (!selectedRating) return;

    selectedRatingText.textContent = selectedRating;
    ratingState.classList.add("hidden");
    thankYouState.classList.remove("hidden");
  });
})();
