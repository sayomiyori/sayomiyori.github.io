(function () {
  'use strict';

  // ===== Typing effect =====
  const typingEl = document.querySelector('.typing-text');
  if (typingEl) {
    const wordsJson = typingEl.getAttribute('data-words');
    let words = ['Python · C# · C++'];
    try {
      words = JSON.parse(wordsJson);
    } catch (_) {}

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typeSpeed = 140;
    const deleteSpeed = 70;
    const pauseAfterWord = 3200;
    const pauseAfterDelete = 800;

    function type() {
      const currentWord = words[wordIndex];
      if (isDeleting) {
        typingEl.textContent = currentWord.slice(0, charIndex - 1);
        charIndex--;
        setTimeout(type, deleteSpeed);
      } else {
        typingEl.textContent = currentWord.slice(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentWord.length) {
          isDeleting = true;
          setTimeout(type, pauseAfterWord);
          return;
        }
        setTimeout(type, typeSpeed);
      }
      if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, pauseAfterDelete);
      }
    }

    setTimeout(type, 1200);
  }

  // ===== Scroll reveal =====
  const revealEls = document.querySelectorAll('.reveal');
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -80px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  revealEls.forEach((el, i) => {
    el.style.setProperty('--i', i);
    observer.observe(el);
  });

  // ===== Header scroll =====
  const header = document.querySelector('.header');
  if (header) {
    let lastScroll = 0;
    const scrollHandler = () => {
      const top = window.scrollY || document.documentElement.scrollTop;
      header.classList.toggle('scrolled', top > 60);
      lastScroll = top;
    };
    window.addEventListener('scroll', scrollHandler, { passive: true });
    scrollHandler();
  }

  // ===== Mobile menu =====
  const burger = document.querySelector('.nav__burger');
  const navList = document.querySelector('.nav__list');
  const navLinks = document.querySelectorAll('.nav__list a');

  if (burger && navList) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('open');
      navList.classList.toggle('open');
      document.body.style.overflow = navList.classList.contains('open') ? 'hidden' : '';
    });

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        burger.classList.remove('open');
        navList.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ===== Smooth scroll for anchor links =====
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ===== Project cards: add stagger index for animation delay =====
  document.querySelectorAll('.project-card').forEach((card, i) => {
    card.style.setProperty('--i', i);
  });
})();
