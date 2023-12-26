document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded. Applying event listeners and filters...");

  var applyButton = document.querySelector(".filters-apply-button");
  var filterButton = document.querySelector(".filters-clear-button");

  applyButton.addEventListener("click", applyFilters);
  filterButton.addEventListener("click", clearFilters);

  function applyFilters() {
    console.log("Applying filters...");

    var ageFrom = document.querySelector("#ageFilter .ageFrom").value;
    var ageTo = document.querySelector("#ageFilter .ageTo").value;
    var language = document.querySelector("#languageFilter .language").value;
    var microphone = document.querySelector("#checkbox").checked;
    var rank = document.querySelector("#rankFilter .rank").value;
    var gameMode = document.querySelector("#gameModeFilter .gamemodes").value;

    console.log("Initial values:", {
      ageFrom,
      ageTo,
      language,
      microphone,
      rank,
      gameMode,
    });

    var allCards = document.querySelectorAll(".card-profile");
    allCards.forEach(function (card) {
      card.style.display = "none";
      console.log("Hiding card:", card);
    });

    allCards.forEach(function (card) {
      console.log("Applying filters for card:", card);

      var cardAge = card.getAttribute("data-age");
      var cardLanguage = card.getAttribute("data-language");
      var cardMicrophone = card.getAttribute("data-microphone") === "true";
      var cardRank = card.getAttribute("data-rank");
      var cardGameMode = card.getAttribute("data-game-mode");

      var ageCondition = filterAge(cardAge, ageFrom, ageTo);
      var languageCondition = language === "--" || cardLanguage === language;
      var microphoneCondition = !microphone || cardMicrophone;
      var rankCondition = rank === "--" || cardRank === rank;
      var gameModeCondition = gameMode === "--" || cardGameMode === gameMode;

      if (
        ageCondition &&
        languageCondition &&
        microphoneCondition &&
        rankCondition &&
        gameModeCondition
      ) {
        card.style.display = "block";
        console.log("Filter matched. Showing card:", card);
      } else {
        console.log("Filter did not match for card:", card);
      }
    });

    console.log(
      "Total number of filtered cards:",
      document.querySelectorAll(".grid-link[style='display: block;']").length
    );
    console.log("Filters applied.");
  }

  function filterAge(cardAge, ageFrom, ageTo) {
    var hasNumbers = /\d/.test(cardAge);

    if (hasNumbers) {
      var ageValue = parseInt(cardAge, 10);
      var fromValue = parseInt(ageFrom, 10) || 0;
      var toValue = parseInt(ageTo, 10) || Infinity;

      return ageValue >= fromValue && ageValue <= toValue;
    }

    return true;
  }
  function clearFilters() {
    document.querySelector("#ageFilter .ageFrom").value = "";
    document.querySelector("#ageFilter .ageTo").value = "";
    document.querySelector("#languageFilter select").value = "--";
    document.querySelector("#checkbox").checked = false;
    document.querySelector("#rankFilter select").value = "--";
    document.querySelector("#gameModeFilter select").value = "--";

    var allCards = document.querySelectorAll(".grid-link");
    allCards.forEach(function (card) {
      card.style.display = "block";
    });
    console.log("Filters cleared.");
  }
});

document.addEventListener("click", function (event) {
  var copyButton = event.target.closest(".copyButton");
  if (copyButton) {
    var copyTextElement = copyButton.parentElement.querySelector(".copyable");
    var copyText = copyTextElement.dataset.copytext;

    var range = document.createRange();
    range.selectNode(copyTextElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();

    console.log("Copied: " + copyText);
  }
});
