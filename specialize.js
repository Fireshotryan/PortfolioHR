document.addEventListener("DOMContentLoaded", function() {
    // Get the modal and the button
    var modal = document.getElementById("myModal");
    var btn = document.querySelector(".open-modal-button");
    var closeBtn = document.querySelector(".close");

    // Open the modal when the button is clicked
    btn.addEventListener("click", function() {
        modal.style.display = "flex";
    });

    // Close the modal when the close button is clicked
    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Close the modal when clicking outside the modal content
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});