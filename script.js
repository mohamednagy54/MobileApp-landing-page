

const navMenu = document.getElementById("navMenu");

const navbar = document.getElementById("navbar");




navMenu.addEventListener("click", (eo) => {
    
    navMenu.classList.toggle("active");
    navbar.classList.toggle("visible")
    

})