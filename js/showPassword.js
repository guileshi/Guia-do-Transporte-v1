$("body").on('click', '.confirm-password', function() {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $("#confirm-password");
    if (input.attr("type") === "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
});

$("body").on('click', '.password', function() {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $("#password");
    if (input.attr("type") === "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
});