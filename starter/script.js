'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// console.log(btnsOpenModal);

// function for duplicate code; close icon on click
const closeModal = function () {
  //   console.log('Button clicked');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', function () {
    // console.log('Button clicked');
    // in order to show overlay from CSS
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// on esc console will close the modal
document.addEventListener('keydown', function (e) {
  console.log(e.key);

  // if === escape and modal does not contain the class of 'hidden', close
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
