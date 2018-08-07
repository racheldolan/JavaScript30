console.log('js loaded');

document.addEventListener('keydown', playAudio);

function playAudio(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return;
  audio.play();
  key.classList.add('playing');
}

const keys = document.querySelectorAll('.key');

function removeClass(e) {
  if(e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

keys.forEach(key => key.addEventListener('transitionend', removeClass));
