function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
//   document.addEventListener("DOMContentLoaded", function() {
//   document.querySelectorAll('.animated').forEach(item => {
//     item.addEventListener('mouseenter', function() {
//       // Reset animation
//       item.style.animation = 'none';
//       setTimeout(() => {
//         item.style.animation = ''; // Reapply the animation after a small delay
//       }, 10);
//     });
//   });
// });


document.addEventListener("DOMContentLoaded", function() {
  let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
  };

  let observerCallback = (entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
              observer.unobserve(entry.target);
          }
      });
  };

  let observer = new IntersectionObserver(observerCallback, options);
  let sections = document.querySelectorAll('section');

  sections.forEach(section => {
      observer.observe(section);
  });
});

document.addEventListener("DOMContentLoaded", function() {
  let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1  // Trigger when 10% of the element is in view
  };

  // Callback when the intersection occurs
  let observerCallback = (entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('animate__animated', 'animate__fadeIn');
              observer.unobserve(entry.target);  // Stop observing once animation is triggered
          }
      });
  };

  // Create the observer
  let observer = new IntersectionObserver(observerCallback, options);

  // Observe the contact info and form
  let contactInfo = document.querySelector('.contact_info');
  let contactForm = document.querySelector('.contact_form');

  if (contactInfo) {
      observer.observe(contactInfo);
  }
  if (contactForm) {
      observer.observe(contactForm);
  }
});
document.addEventListener("DOMContentLoaded", function() {
    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1  // Trigger when 10% of the element is visible
    };

    let observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInLeft');
                observer.unobserve(entry.target);  // Stop observing once animation is triggered
            }
        });
    };

    let observer = new IntersectionObserver(observerCallback, options);

    // Select the #aboutUs section and observe it
    let aboutUsSection = document.querySelector('#aboutUs');
    if (aboutUsSection) {
        observer.observe(aboutUsSection);
    }
});
