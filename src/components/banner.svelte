<script lang="ts">
    import '../styles/global.css';
    let imagePath = 'images/banner-sofia.webp';
    import RocketComponent from './shared/rocket.svelte';

    // import Modal from './shared/shedule-meet.svelte';
    // let isOpenModal = false;

    // function openModal() {
    //   isOpenModal = true;
    // }
    // function closeModal() {
    //   isOpenModal = false;
    // }
</script>

 <section class="section-banner container align-items-center">

    <div class="margin-top-navbar bg-transparent">
      <div class="row p-4 p-lg-0 text-light align-items-center bg-transparent">
        <div class="col-md-6">
          <p class="kicker">A trusted Software Agency</p>
          <h1 class="jumbo">Let your business grow</h1>
          <h1 class="jumbo">with <small class="jumbo"><span></span><span>SOFIA</span></small>      </h1>
          <p class="text-secondary">We build effective strategies to help you reach customers <br>prospects across the entire web</p>
          <div class="d-flex">
            <a href="#contact" class="btn-contact borderless-button">Contact &nbsp;<i class="fa-solid fa-arrow-right"></i></a>
            <!-- <button id="let-talk-button" on:click={openModal} class="btn-outline-custom mx-3"><i class="fa-regular fa-calendar"></i> &nbsp;Let's talk</button> -->
            <button id="let-talk-button" class="btn-outline-custom mx-3"><i class="fa-regular fa-calendar"></i> &nbsp;Let's talk</button>
          </div>
        </div>
        <div class="col-md-6 py-2 padding-banner border-0">

          <div class="card bg-transparent border-0 image-banner">
            <img src="{imagePath}" alt="" class="img-fluid img-sm-75 img-md-75 img-lg-100">
          </div>
        </div>
      </div>
    </div>

    <RocketComponent></RocketComponent>

    <!-- <Modal isOpen={isOpenModal} on:closeModal={closeModal} /> -->

  </section>