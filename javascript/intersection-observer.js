document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-on-scroll-visible');
          observer.unobserve(entry.target); // Optional: Stop observing after animation triggers
        }
      });
    }, { threshold: 0.1 });
  
    const animateSection = document.querySelector('#animate-section');
    observer.observe(animateSection);
  });
  