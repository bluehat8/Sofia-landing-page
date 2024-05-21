<script>
    import { reveal, setDefaultOptions } from 'svelte-reveal';
</script>

<section use:reveal={{ delay: 200, duration: 300, reset: true, easing: [0.35, 0.5, 0.65, 0.98], preset: 'fly', y:50, opacity:0}} 
id="about" class="section-b py-5">
    <div class="overlay" id="about-overlay">
      <div class="section-b-inner py-5">
        <h3 class="kicker">About us</h3>
        <h2 class="text-5 mt-1 about-title"> A Software Agency</h2>
        <p class="mt-1 paragraph-subtitle">
           Specializing in web development, we provide the best
              IT solutions by using all the possible resources while enabling
              businesses to compete with the ongoing challenges.
        </p>
      </div>
    </div>
  </section>
  