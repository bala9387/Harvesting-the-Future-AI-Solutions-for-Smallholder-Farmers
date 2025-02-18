document.addEventListener('DOMContentLoaded', function () {
      const hamburger = document.querySelector('.hamburger');
      const navLinks = document.querySelector('.nav-links');

      hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('open');
      });
    });
function irrigation() {
  let progress1 = 0;
  const progress1Bar = document.getElementById("progress1-bar");
  const progress1Text = document.getElementById("progress1-text");
  
  const interval = setInterval(() => {
    progress1 += 1; // Increase the progress by 1% every 1ms
    progress1Bar.style.width = progress1 + "%";
    progress1Text.textContent = progress1 + "%"; // Update the text to show the percentage
    
    if (progress1 >= 75) {
      clearInterval(interval);
    }
  }, 3);  // Adjust the interval to control the speed of the progress bar
}

function fertilizer() {
  let progress2 = 0;
  const progress2Bar = document.getElementById("progress2-bar");
  const progress2Text = document.getElementById("progress2-text");
  
  const interval = setInterval(() => {
    progress2 += 1; // Increase the progress by 1% every 1ms
    progress2Bar.style.width = progress2 + "%";
    progress2Text.textContent = progress2 + "%"; // Update the text to show the percentage
    
    if (progress2 >= 80) {
      clearInterval(interval);
    }
  }, 3);  // Adjust the interval to control the speed of the progress bar
}
