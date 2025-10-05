const link = document.querySelector('.myLink');
const sound = document.getElementById('clickSound');

link.addEventListener('click', (event) => {
  event.preventDefault();
  sound.currentTime = 0;
  sound.play();

  setTimeout(() => {
    window.location.href = link.href;
  }, 1000); // время под длину твоей озвучки
});