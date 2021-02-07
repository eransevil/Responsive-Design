function mouseOver(num) {
  document.querySelector(`.arrow${num}`).style.display = 'inline-block';
}

function mouseOut(num) {
  document.querySelector(`.arrow${num}`).style.display = 'none';
}

function toggleMenu() {
  document.body.classList.toggle('menu-open');
}

function toggleModal() {
  document.body.classList.toggle('modal-open');
}

