<script lang="ts">
    import '../../styles/modal.css';
    import '../../styles/calendar.css';
    import { onMount, createEventDispatcher } from 'svelte';
    import { initializeModalEvents } from '../../utils/modal';

    const dispatch = createEventDispatcher();
    export let isOpen = false;

    initializeModalEvents(isOpen, dispatch);

    import { initializeCalendarElements, createCalendar, addEvent, showEvents } from '../../utils/calendar';
    let currentDate = new Date();

    onMount(() => {
    initializeCalendarElements();

    createCalendar(currentDate);

    let todayDayName = document.getElementById("todayDayName");
    if (todayDayName) {
        todayDayName.innerHTML =
            "Today is " +
            currentDate.toLocaleString("en-US", {
                weekday: "long",
                day: "numeric",
                month: "short",
            });
    }

    let prevButton = document.getElementById("prev");
    let nextButton = document.getElementById("next");

    if (prevButton) {
      prevButton.onclick = function changeMonthPrev() {
        currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1);
        createCalendar(currentDate, "left");
      };
    }

    if (nextButton) {
      nextButton.onclick = function changeMonthNext() {
        currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);
        createCalendar(currentDate, "right");
      };
    }

    let addEventButton = document.getElementById("addEventButton");
    let eventTitle = document.getElementById("eventTitle") as HTMLInputElement;
    let eventDescription = document.getElementById("eventDescription") as HTMLInputElement;

    // Logic to add an event on calendar

    let sidebar = document.getElementById("sidebar");

    if (sidebar) {
    sidebar.onclick = function (e: MouseEvent) {
      let target = e.target as HTMLElement;
      if (target.classList.contains("eventCard-mark")) {
        let eventCard = target.closest(".eventCard");
        if (eventCard) {
          eventCard.classList.toggle("eventCard--expanded");
        }
      }
    };
  }
});

</script>


<div id="modal" class="modal" style="--display: {isOpen ? 'flex' : 'none'};">
  <div class="modal-lg">
    <div class="modal-content">
      <div class="modal-body p-0">
        <div class="row g-0">
          <!-- Panel izquierdo -->
          <div class="col-12 col-md-3 bg-dark text-white p-5">
            <h3 class="">Let's talk about your business</h3>
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
            <p class="text-start fw-lighter">30 minutes</p>
          </div>
            <p class="text-vmin-3">Get to know each other and discuss your business needs.</p>
            <p class="text-vmin-3">We'll provide you with a personalized solution.</p>
          </div>
          
          <!-- Panel central -->
          <div class="col-12 col-md-6">
            <div class="content-wrapper grey lighten-3">
              <div class="">
          
                <div class="calendar-wrapper z-depth-2">
          
                  <div class="header-background">
                    <div class="calendar-header">
          
                      <button class="prev-button" id="prev">
                        <i class="material-icons">keyboard_arrow_left</i>
                      </button>
                      <button  class="next-button" id="next">
                        <i class="material-icons">keyboard_arrow_right</i>
                      </button>
          
                      <div class="row header-title">
          
                        <div class="header-text text-center mt-2">
                          <h3 id="month-name">February</h3>
                          <h5 id="todayDayName">Today is Friday 7 Feb</h5>
                        </div>
          
                      </div>
                    </div>
                  </div>
          
                  <div class="calendar-content">
                    <div id="calendar-table" class="calendar-cells">
          
                      <div id="table-header">
                        <div class="row">
                          <div class="col">Mon</div>
                          <div class="col">Tue</div>
                          <div class="col">Wed</div>
                          <div class="col">Thu</div>
                          <div class="col">Fri</div>
                          <div class="col">Sat</div>
                          <div class="col">Sun</div>
                        </div>
                      </div>
          
                      <div id="table-body" class="">
          
                      </div>
          
                    </div>
                  </div>
          
                </div>
          
              </div>
            </div>
          
          </div>

          <!-- end calendar -->
          
          <!-- Panel derecho -->
          <div class="col-12 col-md-3 p-3">
            <p class="text-end text-secondary">friday 22</p>

            <div class="btn-container">
	
              <label class="switch btn-color-mode-switch">
                    <input value="1" id="color_mode" name="color_mode" type="checkbox">
                    <label class="btn-color-mode-switch-inner" data-off="12 h" data-on="24 h" for="color_mode"></label>
                </label>
                
            </div>
            <div class="mt-3">
              <div class="row g-2">
                <div class="col-6 col-sm-6 col-md-12">
                  <button type="button" class="btn btn-outline-primary w-100 rounded-1">9:00 AM</button>
                </div>
              </div>
              <div class="row g-2">
                <div class="col-6 col-sm-6 col-md-12">
                  <button type="button" class="btn btn-outline-primary w-100 rounded-1">10:00 AM</button>
                </div>
              </div>
              <div class="row g-2">
                <div class="col-6 col-sm-6 col-md-12">
                  <button type="button" class="btn btn-outline-primary w-100 rounded-1">11:00 AM</button>
                </div>
              </div>
              <div class="row g-2">
                <div class="col-6 col-sm-6 col-md-12">
                  <button type="button" class="btn btn-outline-primary w-100 rounded-1">12:00 PM</button>
                </div>
              </div>
              <div class="row g-2">
                <div class="col-6 col-sm-6 col-md-12">
                  <button type="button" class="btn btn-outline-primary w-100 rounded-1">1:00 PM</button>
                </div>
              </div>
              <div class="row g-2">
                <div class="col-6 col-sm-6 col-md-12">
                  <button type="button" class="btn btn-outline-primary w-100 rounded-1">2:00 PM</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary">Agendar</button>
      </div> -->
    </div>
  </div>
  </div>