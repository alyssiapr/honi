// Faire apparaitre le modal
const button = document.getElementById('newpost');

const modal = document.getElementById('modale');

const close = document.getElementById('close');

button.onclick = function() {
    modal.style.display = "block";
}

close.onclick = function() {
    modal.style.display = "none";
}

// Bouton suppression
const trash = document.getElementById('delete');

const bye = document.getElementById('effacable')

trash.onclick= function() {
    bye.remove()
}

// Effet flou sur tout l'écran
const blurry = document.getElementById('row');

window.addEventListener('scroll', function() {
  const scrollDistance = window.pageYOffset;

  blurry.style.filter = `blur(${scrollDistance / 900}px)`;
});


// Local Storage
const text = document.querySelector('textarea');

const storageKey = 'text';

const init = () => {
  
    text.value = localStorage.getItem(storageKey);
    
    text.addEventListener('input', () => {
      localStorage.setItem(storageKey, text.value);
    });
  }
  
  init();


// Side navbar
const btnnav = document.getElementById('burger');

const navbar = document.getElementById('sidenavbar');

const closed = document.getElementById('closed');

btnnav.onclick = function() {
    navbar.style.display = "block";
}

closed.onclick = function() {
    navbar.style.display = "none";
}