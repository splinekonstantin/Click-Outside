// select all buttons
const buttons = document.querySelectorAll('.card button');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');

console.log(modalInner);

function handleCardButtonClick(event) {
  const button = event.currentTarget;
  const card = button.closest('.card');
  const imgSrc = card.querySelector('img').src;
  const desc = card.dataset.description;
  const name = card.querySelector('h2').textContent;
  modalInner.innerHTML = `
  <img width="600" height="600" src="${imgSrc.replace(
    '200',
    '600'
  )}" alt="${name}"/>
  <p>${desc}</p>
  `;
  modalOuter.classList.add('open');
}

function closeModal() {
  modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click', function(e) {
  const isOutside = !e.target.closest('.modal-inner');
  if (isOutside) {
    closeModal();
  }
});

buttons.forEach(button =>
  button.addEventListener('click', handleCardButtonClick)
);

window.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});
