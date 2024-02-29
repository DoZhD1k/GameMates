function setFilters() {
    return {
      ageFrom: "",
      ageTo: "",
      language: "--",
      hasMicrophone: false,
      rank: "--",
      gameMode: "--",
    };
}
  
function applyFilters() {
    var ageFrom = document.querySelector("#ageFilter .part-from").value;
    var ageTo = document.querySelector("#ageFilter .part-to").value;
    var language = document.querySelector(
      "#languageFilter .language-select"
    ).value;
    var microphone = document.querySelector("#checkbox").checked;
    var rank = document.querySelector("#rankFilter .rank-select").value;
    var gameMode = document.querySelector(
      "#gameModeFilter .gameMode-select"
    ).value;
  
    console.log("Initial values:", {
      ageFrom,
      ageTo,
      language,
      microphone,
      rank,
    });
  
    console.log({ gameMode });
  
    var allCards = document.querySelectorAll(".card-profile");
    allCards.forEach(function (card) {
      card.style.display = "none";
      console.log("   ");
    });
  
    allCards.forEach((card) => {
      console.log("Applying filters for card:");
      var cardAge = card.getAttribute("data-age");
      var cardLanguage = card.getAttribute("data-mainLanguage");
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
      } else {
      }
    });
  
    console.log(
      "Total number of filtered cards:",
      document.querySelectorAll(".grid-link[style='display: block;']").length
    );
    console.log("Filters applied.");
  }
  
  function filterAge(cardAge, ageFrom, ageTo) {
    const hasNumbers = /\d/.test(cardAge);
  
    if (hasNumbers) {
      const ageValue = parseInt(cardAge, 10);
      const fromValue = parseInt(ageFrom, 10) || 0;
      const toValue = parseInt(ageTo, 10) || Infinity;
  
      return ageValue >= fromValue && ageValue <= toValue;
    }
    return true;
}
  
function clearFilters() {
    document.querySelector("#ageFilter .part-from").value = "";
    document.querySelector("#ageFilter .part-to").value = "";
    document.querySelector("#languageFilter select").value = "--";
    document.querySelector("#checkbox").checked = false;
    document.querySelector("#rankFilter select").value = "--";
    document.querySelector("#gameModeFilter select").value = "--";
  
    var allCards = document.querySelectorAll(".card-profile");
    allCards.forEach(function (card) {
      card.style.display = "block";
    });
    console.log("Filters cleared.");
  
    setFilters({});
}
  
function eyeTraining() {
    const movingText = document.getElementById("movingText");
    const toggleBtn = document.getElementById("toggleBtn");
  
    let isPaused = false;
    let currentX = 0;
    let currentY = 0;
  
    function setRandomCoordinates() {
      if (!isPaused) {
        const x = Math.random() * 1 - 0.5;
        const y = Math.random() * 1 - 0.5;
        movingText.style.setProperty("--x", x);
        movingText.style.setProperty("--y", y);
        currentX = x;
        currentY = y;
      }
    }
  
    function setCenterCoordinates() {
      const x = 0;
      const y = 0;
      movingText.style.setProperty("--x", x);
      movingText.style.setProperty("--y", y);
      currentX = x;
      currentY = y;
    }
  
    // setRandomCoordinates();
    setCenterCoordinates();
  
    movingText.addEventListener("animationiteration", setRandomCoordinates);
  
    toggleBtn.addEventListener("click", function () {
      if (isPaused) {
        movingText.style.animationPlayState = "running";
        isPaused = false;
        movingText.style.setProperty("--x", currentX);
        movingText.style.setProperty("--y", currentY);
      } else {
        movingText.style.animationPlayState = "paused";
        isPaused = true;
      }
    });
}
  
function adminPanel() {
    // Находим все кнопки "Delete" по классу
    var deleteButtons = document.querySelectorAll(".admin-games-delete");
  
    deleteButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        var row = button.closest("tr");
        row.remove();
      });
    });
  }
  
  export { adminPanel, applyFilters, filterAge, clearFilters };
  export default eyeTraining;
  