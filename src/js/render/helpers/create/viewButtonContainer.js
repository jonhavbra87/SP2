export function viewButtonContainer(postData) {
  const viewButtonContainer = document.createElement('button');

  viewButtonContainer.classList.add('btn', 'btn-cb-primary', 'text-uppercase', 'fw-bold', 'mb-2', 'make-offer-btn', 'w-50', 'mx-auto');
  viewButtonContainer.textContent = 'View';

  viewButtonContainer.onclick = () => {
    window.location.href = `/listings/?id=${postData.id}`;
  };

  return viewButtonContainer;
}
