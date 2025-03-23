// Select the checkbox input element by its ID
const toggle = document.getElementById("toggle");

// Add an event listener to run when the checkbox is toggled (checked/unchecked)
toggle.addEventListener("change", () => {
  // Toggle the 'dark-mode' class on the body element based on whether the checkbox is checked
  // If checked, add the class. If unchecked, remove it.
  document.body.classList.toggle("dark-mode", toggle.checked);
});
