$(document).ready(function () {
    // Open modal event
    $(".open-modal-button").click(function () {
        var modalId = $(this).data("modal-id");
        $("#" + modalId).css("display", "block");
    });

    // Close modal event
    $(".close").click(function () {
        $(this).closest(".modal").css("display", "none");
    });

    // Close modal when clicking outside the modal content
    $(window).click(function (event) {
        if (event.target.classList.contains("modal")) {
            $(".modal").css("display", "none");
        }
    });
});
