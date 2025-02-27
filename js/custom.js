document.addEventListener("scroll", function () {
    let scrollPos = window.scrollY;

    document.querySelector(".parallax1").style.transform = `translateY(${scrollPos * 0.3}px)`;
    document.querySelector(".parallax2").style.transform = `translateY(${scrollPos * 0.25}px)`;
    document.querySelector(".parallax3").style.transform = `translateY(${scrollPos * 0.2}px)`;
    document.querySelector(".parallax5").style.transform = `translateY(${scrollPos * 0.25}px)`;
    document.querySelector(".parallax6").style.transform = `translate(${scrollPos * 0.05}px, ${scrollPos * 0.15}px)`;
    document.querySelector(".parallax7").style.transform = `translateY(${scrollPos * 0.15}px)`;
    document.querySelector(".parallax8").style.transform = `translateY(${scrollPos * 0.20}px)`;
  });

  document.addEventListener("DOMContentLoaded", function () {
    const efeitos = ["fade-in", "slide-in-right", "slide-in-left","card1","card2","card3","card4"];
  
    function criarObserver(classe) {
      const elementos = document.querySelectorAll(`.${classe}`);
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      }, { threshold: 0.2 });
  
      elementos.forEach((element) => observer.observe(element));
    }
    efeitos.forEach((classe) => criarObserver(classe));
  });