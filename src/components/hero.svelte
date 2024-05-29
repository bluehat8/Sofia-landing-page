<script lang="ts">

import '../styles/hero.css';

let slider1 = 'https://images.pexels.com/photos/8761047/pexels-photo-8761047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
let slider2 = 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
let slider3 = 'https://images.pexels.com/photos/2977565/pexels-photo-2977565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
let slider4 = 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
let slider5 = 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

</script>


<div class="slider">
    <!-- list Items -->
    <div class="list">
        <div class="item active">
            <img src="{slider1}"  alt="slider1">
            <div class="content">
                <p class="">Consulting</p>
                <h2>Sofia</h2>
                <p class="description">
                    We're focused on truly understanding your unique business 
                    needs and challenges, so we can provide tailored solutions that drive real, measurable impact for your company.
                </p>


                <div class="d-flex">
                    <a href="#contact" class="btn-contact borderless-button">Contact us</a>
                    <button id="let-talk-button" class="btn-outline-custom mx-3"><i class="fa-regular fa-calendar"></i> &nbsp;Let's talk</button>
                </div>
            </div>
        </div>
        <div class="item">
            <img src="{slider2}" alt="slider2">
            <div class="content">
                <p>design</p>
                <h2>Slider 02</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.
                </p>
            </div>
        </div>
        <div class="item">
            <img src="{slider3}" alt="slider3">
            <div class="content">
                <p>design</p>
                <h2>Slider 03</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.
                </p>
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
    <!-- button arrows -->
    <!-- <div class="arrows">
        <button id="prev"></button>
        <button id="next"></button>
    </div> -->
    <!-- thumbnail -->
    <div class="thumbnail">
        <div class="item active">
            <img src="{slider1}" alt = 'slider1'>
            <div class="text">
                Consulting
            </div>
        </div>
        <div class="item">
            <img src="{slider2}" alt= 'slider2'>
            <div class="text">
                Development
            </div>
        </div>
        <div class="item">
            <img src="{slider3}" alt='slider3'>
            <div class="text">
                UX/UI
            </div>
        </div>
        <div class="item">
            <img src="{slider4}" alt='slider4'>
            <div class="text">
                Branding
            </div>
        </div>
        <!-- <div class="item">
            <img src="{slider5}" alt='slider5'>
            <div class="content">
                Name Slider
            </div>
        </div> -->
    </div>
</div>