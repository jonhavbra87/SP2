import { listingsRender } from '../../render';

let isLoading = false;

export function fetchingDataScrolling() {
  window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 100 && !isLoading) {
      listingsRender();
    }
  });
}
