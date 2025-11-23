document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-button");
    const ideaCards = document.querySelectorAll("[data-difficulty]");
  
    if (!filterButtons.length || !ideaCards.length) {
      return; // Nothing to filter on this page
    }
  
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.dataset.filter;
  
        // Update active button styling
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
  
        // Show/hide cards based on difficulty
        ideaCards.forEach((card) => {
          const level = card.dataset.difficulty;
          if (filter === "all" || level === filter) {
            card.style.display = "";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  });
  