<script>
    import '../styles/global.css';
    import '../styles/footer.css';
    let imagePath = 'images/Sofialogo.png';
    import { onMount } from 'svelte';

    let scrolled = false;

    const threshold = 60; // Scrolling threshold in pixels
    onMount(() => {
      const navbar = document.querySelector('.navbar');
      const handleScroll = () => {
        scrolled = window.scrollY > threshold;
        if (navbar) {
          navbar.classList.toggle('bg-black', scrolled); // Toggle based on scrolled value
          if (scrolled) {
            navbar.classList.remove("bg-transparent");
          }
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    });
</script>


<style>
    .navbar {
        transition: background-color 0.5s ease-in-out;
    }
    @media (max-width: 991px){
      .sidebar{
        background-color: rgb(24, 24, 24);
      }
      .social-media{
        padding-right: 16px !important;
      }
    }
</style>

<nav class="navbar navbar-expand-lg navbar-dark bg-transparent navbar-glassm fixed-top">
    <div class="container mt-2">

         <a class="navbar-brand d-flex align-items-center" href="/page.svelte">
          <img class="logo-img" height="45px" width="45px" src="{imagePath}" alt="Logo">
          <h5 class="m-0 font-weight-bold">
            <span class="">SOF<span class="text-gradient">IA</span></span>
          </h5>      
         </a>

        <button class="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>

      </button>
      <div class="sidebar offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
       <!-- Sidebar header -->
        <div class="offcanvas-header text-white border-bottom">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">SOFIA</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body d-flex flex-column flex-lg-row p-4 p-lg-0">
          <ul class="navbar-nav justify-content-center align-items-center fs-6 flex-grow-1 pe-3">
            
            <li class="nav-item mx-4">
              <a class="nav-link" href="#home">Home</a>
            </li>
            <li class="nav-item mx-4">
              <a class="nav-link" href="#about">About</a>
            </li>
            <li class="nav-item mx-4">
              <a class="nav-link" href="#services">Services</a>
            </li>
            <li class="nav-item mx-4">
              <a class="nav-link" href="#contact">Contact</a>
            </li>
          
          </ul>
         

          <div class="example-2 d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3 social-media">
            <li class="text-white btn-custom" data-social="facebook">
              <span class="svgContainer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" x="0px" y="0px" height="1.3em" viewBox="0 0 50 50">
                    <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
                </svg>
              </span>
            </li> 

            <li class="text-white btn-custom" data-social="whatsapp">
              <span class="svgContainer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" x="0px" y="0px"  height="1.3em" viewBox="0 0 50 50">
                  <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"></path>
                </svg>
              </span>
            </li> 
          <!-- </ul> -->
        </div>
      </div>
    </div>
</nav>


<slot/>

<footer class="footer">
  <ul class="social-icon align-items-center justify-content-center">
    <li class="social-icon__item"><a class="social-icon__link" href="#test">
        <ion-icon name="logo-facebook"></ion-icon>
      </a></li>
    <li class="social-icon__item"><a class="social-icon__link" href="#test">
        <ion-icon name="logo-whatsapp"></ion-icon>
      </a></li>
    <!-- <li class="social-icon__item"><a class="social-icon__link" href="#test">
        <ion-icon name="logo-linkedin"></ion-icon>
      </a></li>
    <li class="social-icon__item"><a class="social-icon__link" href="#test">
        <ion-icon name="logo-instagram"></ion-icon>
      </a></li> -->
  </ul>
  <ul class="menu align-items-center justify-content-center">
    <li class="menu__item"><a class="menu__link" href="#home">Home</a></li>
    <li class="menu__item"><a class="menu__link" href="#about">About</a></li>
    <li class="menu__item"><a class="menu__link" href="#services">Services</a></li>
    <li class="menu__item"><a class="menu__link" href="#contact">Contact</a></li>

  </ul>
  <p>&copy;2024 Sofia Consulting | All Rights Reserved</p>
</footer>