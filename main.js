  const navMenu = document.getElementById("nav-menu");
  navLinks.forEach((n) => n.addEventListener("click", () => { navMenu.classList.remove("show") }));
  
  const copy = document.getElementById("copy");
  copy.addEventListener("click", () => {
    navigator.clipboard.writeText("zerolzeri07@gmail.com");
    copy.innerHTML = "copied";
    setTimeout(() => {
      copy.innerHTML = null;
    }, 1000);
  });
  
  const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
  });
  
  sr.reveal(".home-title", {});
  sr.reveal(".button", { delay: 200 });
  sr.reveal(".home-img", { delay: 400 });
  sr.reveal(".home-social-icon", { interval: 200 });
  
  sr.reveal(".about-img", {});
  sr.reveal(".about-subtitle", { delay: 400 });
  sr.reveal(".about-text", { delay: 400 });
  
  sr.reveal(".skills-subtitle", {});
  sr.reveal(".skills-text", {});
  sr.reveal(".skills-data", { interval: 100 });
  
  sr.reveal(".project-img", { interval: 200 });
  
    function darkMode(){
      var element = document.body;
      element.classList.toggle("dark-mode")
    }
  
    var messageArr = ["MERN Developer", "Frontend Developer", "Backend Developer"];
    var textPosition = 0;
    var speed = 200;
  
    typewriter = () => {
      document.querySelector("#jobTitle").innerHTML = messageArr[0].substring(0, textPosition)  ;
      if(textPosition ++  != messageArr[0].length)
          setTimeout(typewriter, speed)
    }
  
  
    window.addEventListener("load" , typewriter);
