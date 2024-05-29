<script>
    let name = '';
    let email = '';
    let contactNo = '';
    let message = '';
  
    function cancel() {
    }
  
    function send() {
    }

import '../styles/about.css'
import '../styles/contact.css'
import {reveal, setDefaultOptions} from 'svelte-reveal';

</script>
  
<!-- <style>
    /* @import '../styles/contact.css'; */
    @import '/static/css/contact.css';

</style> -->
  
  <section use:reveal={{delay: 200, duration: 200, reset: true, y:20, opacity: 0, easing:[0.35, 0.5, 0.65, 0.98]}} class="background contact-section" id="contact">
    <div class="overlay"></div>
    <div class="contact-container">
      <div class="screen">
        <div class="screen-header">
          <div class="screen-header-left">
            <div class="screen-header-button close"></div>
            <div class="screen-header-button maximize"></div>
            <div class="screen-header-button minimize"></div>
          </div>
          <div class="screen-header-right">
            <div class="screen-header-ellipsis"></div>
            <div class="screen-header-ellipsis"></div>
            <div class="screen-header-ellipsis"></div>
          </div>
        </div>
        <div class="screen-body">
          <div class="screen-body-item left">
            <div class="app-title">
              <span>Ready to scale up your business?</span>
              <span>Let's talk about it!</span>
            </div>
            <div class="app-contact">CONTACT INFO: +505 82282296</div>
          </div>
          
          <form action="https://formspree.io/f/xayrzygo"
          method="POST" class="screen-body-item">
            <div class="app-form">
              <div class="app-form-group">
                <input class="app-form-control" placeholder="NAME" required name="name" value="{name}">
              </div>
              <div class="app-form-group">
                <input class="app-form-control" placeholder="EMAIL" required type="email" name="email" bind:value="{email}">
              </div>
              <div class="app-form-group">
                <input class="app-form-control" placeholder="CONTACT NO" required type="phone" name="phone" bind:value="{contactNo}">
              </div>
              <div class="app-form-group message">
                <textarea class="app-form-control max app-form-textarea" required name="message" placeholder="MESSAGE" bind:value="{message}"></textarea>
              </div>
              <div class="app-form-group buttons">
                <!-- <button class="app-form-button" on:click="{cancel}">CANCEL</button> -->
                <button class="app-form-button" on:click="{send}">SEND</button>
              </div>
            </div>

          </form>

        </div>
      </div>
    </div>
  </section>
  