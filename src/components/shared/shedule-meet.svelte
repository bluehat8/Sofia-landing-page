<script lang="ts">
    import '../../styles/modal.css'
    import { onMount, createEventDispatcher } from 'svelte';
    import { initializeModalEvents } from '../../utils/modal';

    const dispatch = createEventDispatcher();
    export let isOpen = false;

    initializeModalEvents(isOpen, dispatch);

</script>


<div id="modal" class="modal" style="--display: {isOpen ? 'flex' : 'none'};">
    <div class="modal-content container">
      <div class="user-panel">
        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24">
	<g fill="none" fill-rule="evenodd">
		<path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
		<path fill="#383838" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M8.5 9.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0m9.758 7.484A7.985 7.985 0 0 1 12 20a7.985 7.985 0 0 1-6.258-3.016C7.363 15.821 9.575 15 12 15s4.637.821 6.258 1.984" />
	</g>
</svg>
        <h2>Let's talk about your business</h2>
        <p class="text-start">At this meeting we will try to get to know each other and see if we can help you achieve your objectives.</p>
      
        <div class="d-flex justify-content-start">
            <div class="align-items-center">
                <svg class="text-start justify-content-center" xmlns="http://www.w3.org/2000/svg" width="1.46rem" height="1.2rem" viewBox="0 0 256 211">
                    <path fill="#00832d" d="m144.822 105.322l24.957 28.527l33.562 21.445l5.838-49.792l-5.838-48.669l-34.205 18.839z" />
                    <path fill="#0066da" d="M0 150.66v42.43c0 9.688 7.864 17.554 17.554 17.554h42.43l8.786-32.059l-8.786-27.925l-29.11-8.786z" />
                    <path fill="#e94235" d="M59.984 0L0 59.984l30.876 8.765l29.108-8.765l8.626-27.545z" />
                    <path fill="#2684fc" d="M.001 150.679h59.983V59.983H.001z" />
                    <path fill="#00ac47" d="M241.659 25.398L203.34 56.834v98.46l38.477 31.558c5.76 4.512 14.186.4 14.186-6.922V32.18c0-7.403-8.627-11.495-14.345-6.781" />
                    <path fill="#00ac47" d="M144.822 105.322v45.338H59.984v59.984h125.804c9.69 0 17.553-7.866 17.553-17.554v-37.796z" />
                    <path fill="#ffba00" d="M185.788 0H59.984v59.984h84.838v45.338l58.52-48.49V17.555c0-9.69-7.864-17.554-17.554-17.554" />
                </svg>
              <p class="text-start fw-lighter">30 minutos</p>
            </div>
          </div>
      </div>
      <div class="calendar-panel">
        <!-- Add calendar code here -->
      </div>
      <div class="time-panel">
        <div class="time-header">
          <button class="time-format-btn">12 horas</button>
        </div>
        <div class="time-slots">
          <!-- Add time slots code here -->
        </div>
      </div>
    </div>
  </div>