
// SHAURYA PORTFOLIO

// Cinematic loading screen
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("hide");
    }, 1800);
});

// Reveal animation on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll("#about").forEach(section => {
    section.classList.add("reveal");
    observer.observe(section);
});

// Interactive mouse glow
document.addEventListener("mousemove", (event) => {
    const orb = document.querySelector(".orb");

    if (orb) {
        const x = (event.clientX / window.innerWidth - 0.5) * 30;
        const y = (event.clientY / window.innerHeight - 0.5) * 30;

        orb.style.translate = `${x}px ${y}px`;
    }
});

console.log("SHAURYA PORTFOLIO INITIALIZED");
