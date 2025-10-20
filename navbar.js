const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  // Hide/Show Navbar on Scroll
  let lastScroll = 0;
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    navbar.style.top = (currentScroll > lastScroll) ? "-100px" : "0";
    lastScroll = currentScroll;
  });

  // Copy Button Functionality
  const copyBtn = document.getElementById('copyBtn');

  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(document.documentElement.outerHTML)
      .then(() => {
        copyBtn.textContent = '✅ Copied!';
        copyBtn.classList.add('copied');
        setTimeout(() => {
          copyBtn.textContent = '📋 Copy Code';
          copyBtn.classList.remove('copied');
        }, 2000);
      })
      .catch(err => console.error('Copy failed:', err));
  });