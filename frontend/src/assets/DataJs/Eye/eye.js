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
  

  
    setRandomCoordinates();  
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

export default eyeTraining;