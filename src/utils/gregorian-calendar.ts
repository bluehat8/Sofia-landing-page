import { onMount } from 'svelte';

let calendar: HTMLElement | null;
let gridTable: HTMLElement | null;
let currentDate = new Date();
let selectedDate = currentDate;
let selectedDayBlock: HTMLElement | null = null;

let sidebar: HTMLElement | null;

let globalEventObj: { [key: string]: { [key: string]: string } } = {};

onMount(() => {
  calendar = document.getElementById("calendar-table");
  gridTable = document.getElementById("table-body");
  sidebar = document.getElementById("sidebar");

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

  if (addEventButton) {
    addEventButton.onclick = function () {
      let title = eventTitle.value;
      let description = eventDescription.value;
      if (title && description) {
        addEvent(title, description);
        eventTitle.value = "";
        eventDescription.value = "";
        showEvents();
      }
    };
  }

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



export function createCalendar(date: Date, side: string = "") {
    if (!gridTable) return;
  
    let startDate = new Date(date.getFullYear(), date.getMonth(), 1);
  
    let monthTitle = document.getElementById("month-name");
    if (monthTitle) {
      monthTitle.innerHTML =
        date.toLocaleString("en-US", {
          month: "long",
        }) +
        " " +
        date.toLocaleString("en-US", {
          year: "numeric",
        });
    }
  
    if (side === "left") {
      gridTable.className = "animated fadeOutRight";
    } else {
      gridTable.className = "animated fadeOutLeft";
    }
  
    setTimeout(() => {
      if (!gridTable) return;
      gridTable.innerHTML = "";
  
      let newTr = document.createElement("div");
      newTr.className = "row";
      let currentTr = gridTable.appendChild(newTr);
  
      for (let i = 1; i < (startDate.getDay() || 7); i++) {
        let emptyDivCol = document.createElement("div");
        emptyDivCol.className = "col empty-day";
        currentTr.appendChild(emptyDivCol);
      }
  
      let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  
      function addNewRow(): HTMLDivElement {
          let node = document.createElement("div");
          node.className = "row";
          return node;
        }
  
      for (let i = 1; i <= lastDay; i++) {
        if (currentTr.children.length >= 7) {
          currentTr = gridTable.appendChild(addNewRow());
        }
        let currentDay = document.createElement("div");
        currentDay.className = "col";
        if (
          (selectedDayBlock === null && i === currentDate.getDate()) ||
          selectedDate.toDateString() === new Date(date.getFullYear(), date.getMonth(), i).toDateString()
        ) {
          selectedDate = new Date(date.getFullYear(), date.getMonth(), i);
  
          let eventDayName = document.getElementById("eventDayName");
          if (eventDayName) {
            eventDayName.innerHTML = selectedDate.toLocaleString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            });
          }
  
          selectedDayBlock = currentDay;
          setTimeout(() => {
            if (selectedDayBlock) {
              selectedDayBlock.classList.add("blue");
              selectedDayBlock.classList.add("lighten-3");
            }
          }, 900);
        }
        currentDay.innerHTML = i.toString();
  
        // Show marks
        if (globalEventObj[new Date(date.getFullYear(), date.getMonth(), i).toDateString()]) {
          let eventMark = document.createElement("div");
          eventMark.className = "day-mark";
          currentDay.appendChild(eventMark);
        }
  
        currentTr.appendChild(currentDay);
      }
  
      for (let i = currentTr.getElementsByTagName("div").length; i < 7; i++) {
        let emptyDivCol = document.createElement("div");
        emptyDivCol.className = "col empty-day";
        currentTr.appendChild(emptyDivCol);
      }
  
      if (side === "left") {
        gridTable.className = "animated fadeInLeft";
      } else {
        gridTable.className = "animated fadeInRight";
      }
    }, !side ? 0 : 270);
  }



  export function addEvent(title: string, desc: string) {
    let dateKey = selectedDate.toDateString();
    if (!globalEventObj[dateKey]) {
      globalEventObj[dateKey] = {};
    }
    globalEventObj[dateKey][title] = desc;
  }
  
  export function showEvents() {
    let sidebarEvents = document.getElementById("sidebarEvents");
    if (!sidebarEvents) return;
  
    sidebarEvents.innerHTML = "";
  
    let objWithDate = globalEventObj[selectedDate.toDateString()];
    if (objWithDate) {
      let eventsCount = 0;
      for (let key in objWithDate) {
        let eventContainer = document.createElement("div");
        eventContainer.className = "eventCard";
  
        let eventHeader = document.createElement("div");
        eventHeader.className = "eventCard-header";
        eventHeader.textContent = key;
  
        let eventDescription = document.createElement("div");
        eventDescription.className = "eventCard-description";
        eventDescription.textContent = objWithDate[key];
  
        let markWrapper = document.createElement("div");
        markWrapper.className = "eventCard-mark-wrapper";
        let mark = document.createElement("div");
        mark.className = "eventCard-mark";
        markWrapper.appendChild(mark);
  
        eventContainer.appendChild(eventHeader);
        eventContainer.appendChild(eventDescription);
        eventContainer.appendChild(markWrapper);
  
        sidebarEvents.appendChild(eventContainer);
  
        eventsCount++;
      }
      let emptyFormMessage = document.getElementById("emptyFormTitle");
      if (emptyFormMessage) {
        emptyFormMessage.innerHTML = `${eventsCount} events now`;
      }
    } else {
      let emptyMessage = document.createElement("div");
      emptyMessage.className = "empty-message";
      emptyMessage.innerHTML = "Sorry, no events to selected date";
      sidebarEvents.appendChild(emptyMessage);
      let emptyFormMessage = document.getElementById("emptyFormTitle");
      if (emptyFormMessage) {
        emptyFormMessage.innerHTML = "No events now";
      }
    }
  }