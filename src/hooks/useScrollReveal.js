import { useEffect } from 'react';

const DEFAULT_OPTIONS = {
  threshold: 0.18,
  rootMargin: '0px 0px -10% 0px',
};

const useScrollReveal = (options) => {
  const { threshold, rootMargin, root } = {
    ...DEFAULT_OPTIONS,
    ...options,
  };

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const elements = document.querySelectorAll('[data-reveal]');

      elements.forEach((element) => {
        element.classList.add('is-visible');
      });

      return;
    }

    const revealElements = document.querySelectorAll('[data-reveal]');
    if (!revealElements.length) {
      return undefined;
    }

    const observerOptions = {
      threshold,
      rootMargin,
      root,
    };

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      observerOptions,
    );

    revealElements.forEach((element) => {
      const delay = element.getAttribute('data-reveal-delay');
      const duration = element.getAttribute('data-reveal-duration');

      if (delay) {
        element.style.transitionDelay = `${delay}ms`;
      }

      if (duration) {
        element.style.transitionDuration = `${duration}ms`;
      }

      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [threshold, rootMargin, root]);
};

export default useScrollReveal;
