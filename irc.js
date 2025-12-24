const rateButtons = document.querySelectorAll(".rate-btn");
const submitBtn = document.querySelector(".submit-btn");
const ratingCard = document.querySelector(".rating-card");
const thankYouCard = document.querySelector(".thank-you-card");
const selectedRating = document.getElementById("selected-rating");

let currentRating = null;

rateButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    rateButtons.forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
    currentRating = btn.textContent;
  });
});

submitBtn.addEventListener("click", () => {
  if (!currentRating) return;

  selectedRating.textContent = currentRating;
  ratingCard.classList.remove("active");
  thankYouCard.classList.add("active");
});
