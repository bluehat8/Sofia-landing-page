<script lang="ts">
    import '../styles/hero.css';
    let calendlyLink = 'https://calendly.com/agustin-amaya-g21/30min';
    import {onMount} from 'svelte';

    let slider1 = 'https://images.pexels.com/photos/8761047/pexels-photo-8761047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
    let slider2 = 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
    let slider3 = 'https://images.pexels.com/photos/2977565/pexels-photo-2977565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
    let slider4 = 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
    let slider5 = 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

    let items: NodeListOf<HTMLDivElement>;  let next: HTMLButtonElement;
    let prev: HTMLButtonElement;
    let thumbnails: NodeListOf<HTMLDivElement>;
    let itemActive: number = 0;
    let countItem: number;
    let refreshInterval: number;

    onMount(() => {
    items = document.querySelectorAll('.slider .list .item');
        next= document.getElementById('next') as HTMLButtonElement;
        prev =  document.getElementById('prev') as HTMLButtonElement;
    thumbnails = document.querySelectorAll('.thumbnail .item');
    countItem = items.length;

    // auto run slider
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000);

    // click thumbnail
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
        });
    });
    });

    function showSlider() {
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    if(itemActiveOld){
        itemActiveOld.classList.remove('active');
    }
    if(thumbnailActiveOld){
        thumbnailActiveOld.classList.remove('active');

    }

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000);
    }

    function nextItem() {
    itemActive = itemActive + 1;
    if (itemActive >= countItem) {
        itemActive = 0;
    }
    showSlider();
    }

    function prevItem() {
    itemActive = itemActive - 1;
    if (itemActive < 0) {
        itemActive = countItem - 1;
    }
    showSlider();
    }

</script>

<div class="hero-container">

<div class="slider">
    <div class="list">
        <div class="item active">
            <img src="{slider1}"  alt="slider1">
            <div class="content">
                <p class="">Consulting</p>
                <h2>SOFIA</h2>
                <p class="description">
                    We're focused on truly understanding your unique business 
                    needs and challenges, so we can provide tailored solutions that drive real, measurable impact for your company.
                </p>


                <div class="d-flex hero-buttons">
                    <a href="#contact" class="btn-contact borderless-button">Contact us</a>
                    <button id="let-talk-button" on:click={() => window.open(calendlyLink)}  class="btn-outline-custom mx-3">
                        <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="white" d="M5.53 2.13L0 7.75h5.53zm.398 0v5.62h7.608v3.65l5.47-4.45c-.014-1.22.031-2.25-.025-3.46c-.148-1.09-1.287-1.47-2.236-1.36zM23.1 4.32c-.802.295-1.358.995-2.047 1.49c-2.506 2.05-4.982 4.12-7.468 6.19c3.025 2.59 6.04 5.18 9.065 7.76c1.218.671 1.428-.814 1.328-1.64v-13a.83.83 0 0 0-.877-.825zM.038 8.15v7.7h5.53v-7.7zm13.577 8.1H6.008v5.62c3.864-.006 7.737.011 11.58-.009c1.02-.07 1.618-1.12 1.468-2.07v-2.51l-5.47-4.68v3.65zm-13.577 0c.02 1.44-.041 2.88.033 4.31c.162.948 1.158 1.43 2.047 1.31h3.464v-5.62z" />
                        </svg> &nbsp;Let's talk</button>
                </div>
            </div>
        </div>
        <div class="item">
            <img src="{slider2}" alt="slider2">
            <div class="content">
                <p>Custom development</p>
                <h2>SOFIA</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.
                </p>

                <div class="d-flex hero-buttons">
                    <a href="#contact" class="btn-contact borderless-button">Contact us</a>
                    <button id="let-talk-button" on:click={() => window.open(calendlyLink)}  class="btn-outline-custom mx-3">
                        <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="white" d="M5.53 2.13L0 7.75h5.53zm.398 0v5.62h7.608v3.65l5.47-4.45c-.014-1.22.031-2.25-.025-3.46c-.148-1.09-1.287-1.47-2.236-1.36zM23.1 4.32c-.802.295-1.358.995-2.047 1.49c-2.506 2.05-4.982 4.12-7.468 6.19c3.025 2.59 6.04 5.18 9.065 7.76c1.218.671 1.428-.814 1.328-1.64v-13a.83.83 0 0 0-.877-.825zM.038 8.15v7.7h5.53v-7.7zm13.577 8.1H6.008v5.62c3.864-.006 7.737.011 11.58-.009c1.02-.07 1.618-1.12 1.468-2.07v-2.51l-5.47-4.68v3.65zm-13.577 0c.02 1.44-.041 2.88.033 4.31c.162.948 1.158 1.43 2.047 1.31h3.464v-5.62z" />
                        </svg> &nbsp;Let's talk</button>
                </div>
            </div>
        </div>
        <div class="item">
            <img src="{slider3}" alt="slider3">
            <div class="content">
                <p>Design</p>
                <h2>SOFIA</h2>
                <p>
                    Designing user interface of your system with good user experience
                </p>

                <div class="d-flex hero-buttons">
                    <a href="#contact" class="btn-contact borderless-button">Contact us</a>
                    <button id="let-talk-button" on:click={() => window.open(calendlyLink)}  class="btn-outline-custom mx-3">
                        <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="white" d="M5.53 2.13L0 7.75h5.53zm.398 0v5.62h7.608v3.65l5.47-4.45c-.014-1.22.031-2.25-.025-3.46c-.148-1.09-1.287-1.47-2.236-1.36zM23.1 4.32c-.802.295-1.358.995-2.047 1.49c-2.506 2.05-4.982 4.12-7.468 6.19c3.025 2.59 6.04 5.18 9.065 7.76c1.218.671 1.428-.814 1.328-1.64v-13a.83.83 0 0 0-.877-.825zM.038 8.15v7.7h5.53v-7.7zm13.577 8.1H6.008v5.62c3.864-.006 7.737.011 11.58-.009c1.02-.07 1.618-1.12 1.468-2.07v-2.51l-5.47-4.68v3.65zm-13.577 0c.02 1.44-.041 2.88.033 4.31c.162.948 1.158 1.43 2.047 1.31h3.464v-5.62z" />
                        </svg> &nbsp;Let's talk</button>
                </div>
            </div>
        </div>
        <div class="item">
            <img src="{slider4}" alt='slider4'>
            <div class="content">
                <p>design</p>
                <h2>Slider 04</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.
                </p>

                <div class="d-flex hero-buttons">
                    <a href="#contact" class="btn-contact borderless-button">Contact us</a>
                    <button id="let-talk-button" on:click={() => window.open(calendlyLink)}  class="btn-outline-custom mx-3">
                        <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="white" d="M5.53 2.13L0 7.75h5.53zm.398 0v5.62h7.608v3.65l5.47-4.45c-.014-1.22.031-2.25-.025-3.46c-.148-1.09-1.287-1.47-2.236-1.36zM23.1 4.32c-.802.295-1.358.995-2.047 1.49c-2.506 2.05-4.982 4.12-7.468 6.19c3.025 2.59 6.04 5.18 9.065 7.76c1.218.671 1.428-.814 1.328-1.64v-13a.83.83 0 0 0-.877-.825zM.038 8.15v7.7h5.53v-7.7zm13.577 8.1H6.008v5.62c3.864-.006 7.737.011 11.58-.009c1.02-.07 1.618-1.12 1.468-2.07v-2.51l-5.47-4.68v3.65zm-13.577 0c.02 1.44-.041 2.88.033 4.31c.162.948 1.158 1.43 2.047 1.31h3.464v-5.62z" />
                        </svg> &nbsp;Let's talk</button>
                </div>
            </div>
        </div>
        <div class="item">
            <img src="{slider5}" alt='slider5'>
            <div class="content">
                <p>design</p>
                <h2>Slider 05</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.
                </p>
            </div>
        </div>
    </div>
   
    <div class="thumbnail">
        <div class:active={itemActive === 0} class="item">
            <img src="{slider1}" alt = 'slider1'>
            <div class="text">
                Consulting
            </div>
        </div>
        <div class:active={itemActive === 1} class="item">
            <img src="{slider2}" alt= 'slider2'>
            <div class="text">
                Development
            </div>
        </div>
        <div class:active={itemActive === 2} class="item">
            <img src="{slider3}" alt='slider3'>
            <div class="text">
                UX/UI
            </div>
        </div>
        <div class:active={itemActive === 3} class="item">
            <img src="{slider4}" alt='slider4'>
            <div class="text">
                Branding
            </div>
        </div>
       
    </div>
</div> 


</div>

