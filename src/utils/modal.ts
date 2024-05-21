import { onMount, createEventDispatcher } from 'svelte';

export function initializeModalEvents(isOpen: boolean, dispatch: any) {
  function closeModal() {
    isOpen = false;
    dispatch('closeModal', { isOpen });
  }

  function handleClickOutside(event: MouseEvent) {
    if (event.target) {
      const target = event.target as HTMLElement;
      if (target && !target.closest('.modal-content')) {
        closeModal();
      }
    }
  }

  onMount(() => {
    const modal = document.getElementById('modal');

    if (modal) {
      modal.addEventListener('click', handleClickOutside);
      return () => {
        modal.removeEventListener('click', handleClickOutside);
      };
    }
  });
}