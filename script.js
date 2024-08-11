document.addEventListener("DOMContentLoaded", () => {
  const faqButtons = document.querySelectorAll(".card-item-btn");

  faqButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const isExpanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", !isExpanded);
      const content = button.nextElementSibling;
      content.style.maxHeight = isExpanded ? null : content.scrollHeight + "px";
      content.parentElement.classList.toggle("active");
    });

    button.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        button.click();
      }
    });
  });
});
