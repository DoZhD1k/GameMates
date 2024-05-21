function eyeTraining(movingTextElement, toggleBtnElement) {
  let isPaused = false;
  let currentX = 0;
  let currentY = 0;

  function setRandomCoordinates() {
    if (!isPaused) {
      const x = Math.random() * 1 - 0.5;
      const y = Math.random() * 1 - 0.5;
      movingTextElement.style.setProperty("--x", x.toString());
      movingTextElement.style.setProperty("--y", y.toString());
      currentX = x;
      currentY = y;
    }
  }

  setRandomCoordinates();
  movingTextElement.addEventListener(
    "animationiteration",
    setRandomCoordinates
  );

  toggleBtnElement.addEventListener("click", function () {
    if (isPaused) {
      movingTextElement.style.animationPlayState = "running";
      isPaused = false;
      movingTextElement.style.setProperty("--x", currentX.toString());
      movingTextElement.style.setProperty("--y", currentY.toString());
    } else {
      movingTextElement.style.animationPlayState = "paused";
      isPaused = true;
    }
  });
}

export default eyeTraining;
