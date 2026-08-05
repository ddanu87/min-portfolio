/**
 * OBBG.dk - Main JavaScript
 * Enhanced with animations, effects, and interactive features
 */

document.addEventListener("DOMContentLoaded", function () {
  // Initialize all components
  initNavigation();
  initAnimations();
  initFormValidation();
  initVerificationTabs();
  initPasswordStrength();
  init3DEffects();
  initTestimonialSlider();
});

// Global toggle menu function to ensure it's accessible everywhere
let toggleMenu;

/**
 * Navigation functionality
 */
function initNavigation() {
  // Ensure this runs on all pages including signup
  // Direct implementation of menu toggle for maximum compatibility
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  // Define the toggleMenu function globally
  toggleMenu = function () {
    if (navLinks) {
      navLinks.classList.toggle("active");
      document.body.classList.toggle("menu-open");

      // Change icon when menu is open/closed
      const icon = menuToggle.querySelector("i");
      if (icon) {
        if (navLinks.classList.contains("active")) {
          icon.className = "fas fa-times";
        } else {
          icon.className = "fas fa-bars";
        }
      }
    }
  };

  // Mobile menu toggle - simplified and robust implementation
  if (menuToggle && navLinks) {
    // Remove any existing event listeners to prevent duplicates
    const newMenuToggle = menuToggle.cloneNode(true);
    if (menuToggle.parentNode) {
      menuToggle.parentNode.replaceChild(newMenuToggle, menuToggle);
    }

    // Add fresh event listener with explicit event handling
    newMenuToggle.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      toggleMenu();
    });

    // Ensure menu items are clickable
    const menuItems = navLinks.querySelectorAll("a");
    menuItems.forEach((item) => {
      item.addEventListener("click", function () {
        // Close menu when an item is clicked
        if (navLinks.classList.contains("active")) {
          setTimeout(toggleMenu, 100); // Small delay to allow the click to register
        }
      });
    });
  }

  // Close menu when clicking outside
  document.addEventListener("click", function (e) {
    if (navLinks && navLinks.classList.contains("active")) {
      // Check if click is outside the menu and toggle button
      if (!navLinks.contains(e.target) && !e.target.closest(".menu-toggle")) {
        toggleMenu();
      }
    }
  });

  // Close menu when pressing Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && navLinks && navLinks.classList.contains("active")) {
      toggleMenu();
    }
  });

  // Navbar scroll effect
  const mainNav = document.querySelector(".main-nav");
  if (mainNav) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        mainNav.classList.add("scrolled");
      } else {
        mainNav.classList.remove("scrolled");
      }
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId !== "#") {
        e.preventDefault();

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Adjust for fixed header
            behavior: "smooth",
          });

          // Close mobile menu if open
          if (navLinks && navLinks.classList.contains("active")) {
            navLinks.classList.remove("active");
            if (menuToggle) {
              menuToggle.classList.remove("active");
              const icon = menuToggle.querySelector("i");
              if (icon) {
                icon.className = "fas fa-bars";
              }
            }
          }
        }
      }
    });
  });
}

/**
 * Animations and effects
 */
function initAnimations() {
  // Reveal elements on scroll
  const revealElements = document.querySelectorAll(".fade-in, .slide-up");

  if (revealElements.length > 0) {
    const revealOnScroll = function () {
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 50) {
          element.classList.add("show");
        }
      });
    };

    // Initial check
    revealOnScroll();

    // Check on scroll
    window.addEventListener("scroll", revealOnScroll);
  }

  // Add float animation to selected elements
  document.querySelectorAll(".game-icon, .security-icon, .feature-icon").forEach((element) => {
    element.classList.add("float-animation");
  });

  // Add glitch effect to logo
  const logo = document.querySelector(".logo-text");
  if (logo) {
    logo.classList.add("glitch-effect");
  }

  // Animate counters if they exist
  animateCounters();
}

/**
 * Animate number counters
 */
function animateCounters() {
  const counters = document.querySelectorAll(".counter");

  if (counters.length > 0) {
    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute("data-target"));
      const duration = 2000; // ms
      const step = target / (duration / 16); // 60fps

      let current = 0;
      const updateCounter = () => {
        current += step;
        if (current < target) {
          counter.textContent = Math.ceil(current);
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target;
        }
      };

      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          updateCounter();
          observer.disconnect();
        }
      });

      observer.observe(counter);
    });
  }
}

/**
 * 3D hover effects
 */
function init3DEffects() {
  const elements = document.querySelectorAll(".hover-3d");

  elements.forEach((element) => {
    element.addEventListener("mousemove", (e) => {
      const { left, top, width, height } = element.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      element.style.transform = `
        perspective(1000px)
        rotateX(${y * -10}deg)
        rotateY(${x * 10}deg)
        translateZ(10px)
      `;

      // Add shadow effect
      element.style.boxShadow = `
        ${x * 10}px ${y * 10}px 20px rgba(0, 168, 255, 0.2)
      `;
    });

    element.addEventListener("mouseleave", () => {
      element.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)";
      element.style.boxShadow = "";
    });
  });
}

/**
 * Form validation
 */
function initFormValidation() {
  const form = document.querySelector(".cyber-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      let isValid = true;
      const requiredInputs = form.querySelectorAll("input[required], select[required], textarea[required]");

      // Reset validation styles
      form.querySelectorAll(".input-error").forEach((el) => {
        el.classList.remove("input-error");
      });

      // Check required fields
      requiredInputs.forEach((input) => {
        if (!input.value.trim()) {
          isValid = false;
          input.closest(".input-group").classList.add("input-error");
        }
      });

      // Email validation
      const emailInput = form.querySelector('input[type="email"]');
      if (emailInput && emailInput.value) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
          isValid = false;
          emailInput.closest(".input-group").classList.add("input-error");
        }
      }

      // Password validation
      const passwordInput = form.querySelector("#password");
      const confirmPasswordInput = form.querySelector("#confirm-password");

      if (passwordInput && confirmPasswordInput && passwordInput.value && confirmPasswordInput.value) {
        if (passwordInput.value !== confirmPasswordInput.value) {
          isValid = false;
          passwordInput.closest(".input-group").classList.add("input-error");
          confirmPasswordInput.closest(".input-group").classList.add("input-error");

          // Show password mismatch error
          const errorMsg = document.createElement("div");
          errorMsg.className = "error-message";
          errorMsg.textContent = "Adgangskoderne matcher ikke";

          if (!confirmPasswordInput.closest(".input-group").querySelector(".error-message")) {
            confirmPasswordInput.closest(".input-group").appendChild(errorMsg);
          }
        }
      }

      // Check terms acceptance
      const termsCheckbox = form.querySelector("#terms");
      const ageCheckbox = form.querySelector("#age-verification");

      if (termsCheckbox && !termsCheckbox.checked) {
        isValid = false;
        termsCheckbox.closest(".checkbox-group").classList.add("input-error");
      }

      if (ageCheckbox && !ageCheckbox.checked) {
        isValid = false;
        ageCheckbox.closest(".checkbox-group").classList.add("input-error");
      }

      // If form is valid, show success message or redirect
      if (isValid) {
        // Simulate form submission
        const submitButton = form.querySelector('button[type="submit"]');
        if (submitButton) {
          const originalText = submitButton.innerHTML;
          submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Behandler...';
          submitButton.disabled = true;

          // Simulate API call
          setTimeout(() => {
            // Show success message
            form.innerHTML = `
              <div class="success-message animate__animated animate__fadeIn">
                <div class="success-icon">
                  <i class="fas fa-check-circle"></i>
                </div>
                <h2>Tilmelding Modtaget!</h2>
                <p>Tak for din tilmelding. Vi har sendt en bekræftelsesmail til din e-mail-adresse.</p>
                <p>Du vil blive omdirigeret til verifikationsprocessen om få sekunder...</p>
              </div>
            `;

            // Redirect after delay
            setTimeout(() => {
              window.location.href = "verification.html";
            }, 3000);
          }, 1500);
        }
      } else {
        // Scroll to first error
        const firstError = form.querySelector(".input-error");
        if (firstError) {
          firstError.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
    });
  }
}

/**
 * Password strength meter
 */
function initPasswordStrength() {
  const passwordInput = document.querySelector("#password");
  const strengthBar = document.querySelector(".strength-bar");
  const strengthText = document.querySelector(".strength-text");

  if (passwordInput && strengthBar && strengthText) {
    passwordInput.addEventListener("input", function () {
      const password = this.value;
      let strength = 0;
      let status = "";

      // Calculate password strength
      if (password.length >= 8) strength += 20;
      if (password.match(/[a-z]+/)) strength += 20;
      if (password.match(/[A-Z]+/)) strength += 20;
      if (password.match(/[0-9]+/)) strength += 20;
      if (password.match(/[^a-zA-Z0-9]+/)) strength += 20;

      // Update strength bar
      strengthBar.style.width = strength + "%";

      // Update strength text
      if (strength <= 20) {
        status = "Meget svag";
        strengthBar.style.background = "#ff4d4d";
      } else if (strength <= 40) {
        status = "Svag";
        strengthBar.style.background = "#ffa64d";
      } else if (strength <= 60) {
        status = "Medium";
        strengthBar.style.background = "#ffff4d";
      } else if (strength <= 80) {
        status = "Stærk";
        strengthBar.style.background = "#4dff4d";
      } else {
        status = "Meget stærk";
        strengthBar.style.background = "#4dffff";
      }

      strengthText.textContent = `Adgangskode styrke: ${status}`;
    });
  }
}

/**
 * Verification tabs
 */
function initVerificationTabs() {
  const verificationMethods = document.querySelectorAll(".verification-method");
  const verificationContents = document.querySelectorAll(".verification-content");

  if (verificationMethods.length > 0 && verificationContents.length > 0) {
    verificationMethods.forEach((method) => {
      method.addEventListener("click", function () {
        // Remove active class from all methods
        verificationMethods.forEach((m) => m.classList.remove("active"));

        // Add active class to clicked method
        this.classList.add("active");

        // Hide all content
        verificationContents.forEach((content) => content.classList.add("hidden"));

        // Show selected content
        const methodType = this.getAttribute("data-method");
        const selectedContent = document.getElementById(`${methodType}-content`);
        if (selectedContent) {
          selectedContent.classList.remove("hidden");
        }
      });
    });
  }

  // MitID Verification Simulation
  const mitidButton = document.querySelector(".mitid-button");
  if (mitidButton) {
    mitidButton.addEventListener("click", function () {
      // Create overlay for MitID simulation
      const overlay = document.createElement("div");
      overlay.className = "mitid-overlay animate__animated animate__fadeIn";
      overlay.innerHTML = `
        <div class="mitid-modal">
          <div class="mitid-header">
            <img src="favicon.webp.jpg" alt="OBBG Logo" class="mitid-logo">
            <h3>MitID Verifikation</h3>
          </div>
          <div class="mitid-content">
            <p>Du bliver nu omdirigeret til MitID's sikre login.</p>
            <div class="loading-spinner">
              <i class="fas fa-circle-notch fa-spin"></i>
            </div>
            <p class="small-text">Dette er en simulation. I en rigtig implementering ville du blive sendt til den officielle MitID-side.</p>
          </div>
        </div>
      `;

      document.body.appendChild(overlay);

      // Remove overlay after delay
      setTimeout(() => {
        overlay.classList.remove("animate__fadeIn");
        overlay.classList.add("animate__fadeOut");

        setTimeout(() => {
          document.body.removeChild(overlay);
          alert("MitID-verifikation simuleret. I en rigtig implementering ville du blive sendt til den officielle MitID-side.");
        }, 500);
      }, 3000);
    });
  }
}

/**
 * Testimonial slider
 */
function initTestimonialSlider() {
  const slider = document.querySelector(".testimonial-slider");
  const testimonials = document.querySelectorAll(".testimonial");

  if (slider && testimonials.length > 1) {
    let currentIndex = 0;

    // Create navigation dots
    const dotsContainer = document.createElement("div");
    dotsContainer.className = "slider-dots";

    testimonials.forEach((_, index) => {
      const dot = document.createElement("span");
      dot.className = "slider-dot";
      if (index === 0) dot.classList.add("active");

      dot.addEventListener("click", () => {
        goToSlide(index);
      });

      dotsContainer.appendChild(dot);
    });

    slider.appendChild(dotsContainer);

    // Create navigation arrows
    const prevArrow = document.createElement("button");
    prevArrow.className = "slider-arrow prev";
    prevArrow.innerHTML = '<i class="fas fa-chevron-left"></i>';
    prevArrow.addEventListener("click", () => {
      goToSlide(currentIndex - 1);
    });

    const nextArrow = document.createElement("button");
    nextArrow.className = "slider-arrow next";
    nextArrow.innerHTML = '<i class="fas fa-chevron-right"></i>';
    nextArrow.addEventListener("click", () => {
      goToSlide(currentIndex + 1);
    });

    slider.appendChild(prevArrow);
    slider.appendChild(nextArrow);

    // Hide all testimonials except the first one
    testimonials.forEach((testimonial, index) => {
      if (index !== 0) {
        testimonial.style.display = "none";
      }
    });

    // Function to go to a specific slide
    function goToSlide(index) {
      // Handle index bounds
      if (index < 0) index = testimonials.length - 1;
      if (index >= testimonials.length) index = 0;

      // Hide current testimonial
      testimonials[currentIndex].style.display = "none";

      // Show new testimonial
      testimonials[index].style.display = "block";

      // Update dots
      document.querySelectorAll(".slider-dot").forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
      });

      // Update current index
      currentIndex = index;
    }

    // Auto-rotate testimonials
    setInterval(() => {
      goToSlide(currentIndex + 1);
    }, 5000);
  }
}

// Add CSS class for browsers that support hover
if (window.matchMedia("(hover: hover)").matches) {
  document.documentElement.classList.add("has-hover");
}
