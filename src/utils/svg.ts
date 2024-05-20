import { onMount } from 'svelte';

// used to easily give a number between x and y
export function randomRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

// generate a <circle> element with a random radius and x and y position
export function createCircle() {
  const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  setCircleAttributes(circle);
  return circle;
}

export function setCircleAttributes(circle: SVGCircleElement) {
  circle.setAttribute('r', randomRange(0.5, 2).toString());
  circle.setAttribute('fill', '#AAB7C4');
  circle.setAttribute('cx', randomRange(0, 75).toString());
  circle.setAttribute('cy', randomRange(0, 75).toString());
}

export function animateStars(starElements: SVGCircleElement[]) {
  const across = [
    { cx: '75px', fillOpacity: 0 },
    { fillOpacity: 1 },
    { cx: '0', fillOpacity: 0 },
  ];
  for (const star of starElements) {
    const duration = randomRange(1000, 2000);
    star.animate(across, { duration, iterations: Infinity });
  }
}