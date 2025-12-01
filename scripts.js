// Highlight the active navigation link based on current page
window.onload = function() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (window.location.href.includes(link.getAttribute('href'))) {
            link.classList.add('active');
        }
    });
};

// Example form validation (Contact Page)
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    if(form){
        form.addEventListener("submit", function(event){
            const name = form.elements["name"].value.trim();
            const email = form.elements["email"].value.trim();
            const message = form.elements["message"].value.trim();
            if(!name || !email || !message){
                alert("Please fill all fields before submitting.");
                event.preventDefault();
            }
        });
    }
});
// your existing scripts.js code here
// ...

// Custom cursor glow
document.addEventListener("DOMContentLoaded", function () {
  const dot = document.createElement("div");
  dot.className = "cursor-dot";
  document.body.appendChild(dot);

  window.addEventListener("mousemove", (e) => {
    dot.style.left = e.clientX + "px";
    dot.style.top = e.clientY + "px";
  });
});