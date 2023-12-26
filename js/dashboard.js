document.addEventListener("DOMContentLoaded", function () {
  // Находим все кнопки "Delete" по классу
  var deleteButtons = document.querySelectorAll(".admin-games-delete");

  deleteButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var row = button.closest("tr");
      row.remove();
    });
  });
});
