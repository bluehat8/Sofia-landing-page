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

</script>
  
<!-- <style>
    /* @import '../styles/contact.css'; */
    @import '/static/css/contact.css';

</style> -->
  
  <section class="background contact-section">
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
            <div class="app-contact">CONTACT INFO: +62 81 314 928 595</div>
          </div>
          <div class="screen-body-item">
            <div class="app-form">
              <div class="app-form-group">
                <input class="app-form-control" placeholder="NAME" value="{name}">
              </div>
              <div class="app-form-group">
                <input class="app-form-control" placeholder="EMAIL" bind:value="{email}">
              </div>
              <div class="app-form-group">
                <input class="app-form-control" placeholder="CONTACT NO" bind:value="{contactNo}">
              </div>
              <div class="app-form-group message">
                <textarea class="app-form-control max" placeholder="MESSAGE" bind:value="{message}"></textarea>
              </div>
              <div class="app-form-group buttons">
                <button class="app-form-button" on:click="{cancel}">CANCEL</button>
                <button class="app-form-button" on:click="{send}">SEND</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  