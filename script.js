
  const menuIcon = document.querySelector('#menu-icon');
  const navbar = document.querySelector('.navbar');

  menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  };

  function toggleReadMore(event) {
    event.preventDefault();
    
    const moreText = document.getElementById("more-text");
    const btn = event.target;

    if (moreText.style.display === "none") {
      moreText.style.display = "inline";
      btn.textContent = "Read Less";
    } else {
      moreText.style.display = "none";
      btn.textContent = "Read More";
    }
  }


  