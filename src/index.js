import '@/styles/main';
import 'bootstrap';
import './scripts/aosCustom';

let show = document.getElementById('defaultOpen');
show.addEventListener('click', myFunction);

function myFunction() {
  let x = document.getElementById('London');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}

let popup = document.getElementById('popup');
popup.addEventListener('click', showPopup);

function showPopup() {
  let popup1 = document.getElementById('myPopup');
  popup1.classList.toggle('show');
}

