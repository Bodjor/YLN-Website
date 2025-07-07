const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("show"); // must match ".nav-links.show" in your CSS
});

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const current = +counter.innerText;
    const increment = target / 200; // speed (adjust this for faster/slower)

    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      setTimeout(updateCount, 10);
    } else {
      counter.innerText = target.toLocaleString();
    }
  };

  // Start animation when section is in view
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        updateCount();
        observer.unobserve(counter);
      }
    },
    { threshold: 1.0 }
  );

  observer.observe(counter);
});

// DROP DOWN CLICKABLE FOR MOBILE

// document.querySelectorAll(".dropdown > .nav-link").forEach((link) => {
//   link.addEventListener("click", function (e) {
//     if (window.innerWidth <= 768) {
//       e.preventDefault();

//       // Close all open dropdowns
//       document.querySelectorAll(".dropdown").forEach((item) => {
//         if (item !== this.parentElement) {
//           item.classList.remove("show-dropdown");
//         }
//       });

//       // Toggle clicked dropdown
//       this.parentElement.classList.toggle("show-dropdown");
//     }
//   });
// });

document.querySelectorAll(".dropdown > .nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    if (window.innerWidth <= 768 && !link.getAttribute("href")) {
      e.preventDefault();

      // Close all open dropdowns
      document.querySelectorAll(".dropdown").forEach((item) => {
        if (item !== this.parentElement) {
          item.classList.remove("show-dropdown");
        }
      });

      // Toggle clicked dropdown
      this.parentElement.classList.toggle("show-dropdown");
    }
  });
});


/* curator-feed-default-feed-layout */
// (function () {
//   var i,
//     e,
//     d = document,
//     s = "script";
//   i = d.createElement("script");
//   i.async = 1;
//   i.charset = "UTF-8";
//   i.src =
//     "https://cdn.curator.io/published/df21b889-d7f6-4bc8-b2b6-a0713370f8fa.js";
//   e = d.getElementsByTagName(s)[0];
//   e.parentNode.insertBefore(i, e);
// })();
