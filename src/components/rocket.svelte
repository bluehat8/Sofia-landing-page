<script lang="ts">
    import { onMount } from 'svelte';
    import { randomRange, createCircle, setCircleAttributes, animateStars } from '../utils/svg';

    let starElements: SVGCircleElement[] = [];

    onMount(() => {
      const rocket = document.getElementById('rocket-icon');
      const flame = document.querySelector('.flame');
      
      // generate a set of a transforms that randomly scales the width and height of the rocket’s flame
      const flicker = Array.from({ length: 20 }).map(() => ({
        transform: `scale(${randomRange(0.9, 1.2)}, ${randomRange(0.9, 1.2)})`,
      }));

      if (flame) {
        flame.animate(flicker, { duration: 750, iterations: Infinity });
      }
      // create and insert the stars (circles) to the SVG
      starElements = Array.from({ length: 10 }).map(() => createCircle());
      if (rocket) {
        const top = rocket.querySelector('*');
        if (top) {
          for (const star of starElements) {
            rocket.insertBefore(star, top);
          }
        } else {
          // Handle the case where the element with "*" selector is not found within $rocket (optional)
        }
      } else {
      }
      animateStars(starElements);
    });
</script>

<div class="container justify-content-center">
    <div class="row align-items-center">
        <svg id="rocket-icon" class="container" viewBox="0 0 75 75">
            <polygon fill="#68D4F8" points="18 21 35 21 44 30 27 30"/>
            <polygon fill="#68D4F8" points="27 45 44 45 35 54 18 54"/>
            <path fill="#68D4F8" d="M30.94 47.7c-3.79-.93-6.98-2.35-9.25-4.07a14.88 14.88 0 0 0 0-12.26c2.27-1.72 5.46-3.14 9.25-4.08A14.72 14.72 0 0 1 35 37.5c0 3.98-1.55 7.59-4.06 10.2z"/>
            <path fill="#8DDEF9" d="M30.94 27.3c-3.79.93-6.98 2.35-9.25 4.07.84 1.86 1.31 3.94 1.31 6.13h12c0-3.98-1.55-7.59-4.06-10.2z"/>
            <path fill="#68D4F8" d="M57.06 30.13C62.5 33.1 66 36.73 66 37.5c0 .77-3.49 4.4-8.94 7.37A14.83 14.83 0 0 0 59 37.5c0-2.7-.7-5.21-1.94-7.37z"/>
            <path fill="#8DDEF9" d="M57.06 30.13C62.5 33.1 66 36.73 66 37.5h-7c0-2.7-.7-5.21-1.94-7.37z"/>
            <path fill="#ECFAFF" d="M57.06 44.87C52.94 47.12 47.7 49 42 49c-3.99 0-7.75-.47-11.06-1.3A14.72 14.72 0 0 0 35 37.5c0-3.98-1.55-7.59-4.06-10.2C34.25 26.46 38.01 26 42 26c5.7 0 10.94 1.88 15.06 4.13A14.83 14.83 0 0 1 59 37.5c0 2.7-.7 5.21-1.94 7.37z"/>
            <path fill="#FCFEFF" d="M57.06 30.13C52.94 27.88 47.7 26 42 26c-3.99 0-7.75.47-11.06 1.3A14.72 14.72 0 0 1 35 37.5h24c0-2.7-.7-5.21-1.94-7.37z"/>
            <circle cx="49.5" cy="37.5" r="3.5" fill="#68D4F8"/>
            <path fill="#8DDEF9" d="M46 37.5h7a3.5 3.5 0 0 0-7 0z"/>
            <path fill="#68D4F8" d="M21 37.5c0-10.04-11 0-12 0 1 0 12 10.04 12 0z" class="flame"/>
        </svg>
    </div>
  </div>