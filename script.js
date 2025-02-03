const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () =>{
  navLinks.classList.toggle('active');
});
function startDownload() {
  let progress = 0;
  const progressBar = document.getElementById("progress-bar");
  const progressText = document.getElementById("progress-text");
  
  const interval = setInterval(() => {
    progress += 1; // Increase the progress by 1% every 1ms
    progressBar.style.width = progress + "%";
    progressText.textContent = progress + "%"; // Update the text to show the percentage
    
    if (progress >= 80) {
      clearInterval(interval);
    }
  }, 2);  // Adjust the interval to control the speed of the progress bar
}

