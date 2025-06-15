// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const text = "Hi, I'm Palak Seth";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();

const btn = document.getElementById("backToTop");

window.onscroll = () => {
  btn.style.display = window.scrollY > 200 ? "block" : "none";
};

btn.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Fade-in sections on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));


// Client Review Slider (Mini Carousel)
const reviews = document.querySelectorAll(".review-item");
let index = 0;

function rotateReviews() {
  reviews.forEach((r, i) => {
    r.style.display = i === index ? "block" : "none";
  });
  index = (index + 1) % reviews.length;
}
setInterval(rotateReviews, 4000);
rotateReviews();