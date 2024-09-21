import { hideLoader } from '../../ui/helpers/hideLoader';
import { showLoader } from '../../ui/helpers/showLoader';

export async function reloadPage() {
  showLoader();
  setTimeout(() => {
    hideLoader();
    window.location.reload();
  }, 1000);
}
