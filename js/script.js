var link = document.querySelector('.feedback-btn');
var popup = document.querySelector('.modal-feedback');
var close = popup.querySelector('.modal-content-close');
var overlay = document.querySelector('.modal-overlay');

link.addEventListener('click', function (event) {
  event.preventDefault();
  popup.classList.add('modal-content-show');
});

link.addEventListener('click', function (event) {
  event.preventDefault();
  overlay.classList.add('modal-overlay-show');
});

close.addEventListener('click', function (event) {
  event.preventDefault();
  popup.classList.remove('modal-content-show');
});

close.addEventListener('click', function (event) {
  event.preventDefault();
  overlay.classList.remove('modal-overlay-show');
});

window.addEventListener('keydown', function (event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains('modal-content-show')) {
      popup.classList.remove('modal-content-show');
    }
  }
});

window.addEventListener('keydown', function (event) {
  if (event.keyCode === 27) {
    if (overlay.classList.contains('modal-overlay-show')) {
      overlay.classList.remove('modal-overlay-show');
    }
  }
});
