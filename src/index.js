import '@/styles/main';
import 'bootstrap';
import './scripts/aosCustom';
//import './scripts/add';

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

/*function showPopup() {
  let popup1 = document.getElementById('myPopup');
  if (popup1.style.display === 'block') {
    popup1.style.display = 'none';
  } else {
    popup1.style.display = 'block';
  }
}*/


