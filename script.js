// Mouse tilt effect
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const { offsetX, offsetY } = e;
    const x = (offsetX / card.offsetWidth) * 30 - 15;
    const y = (offsetY / card.offsetHeight) * 30 - 15;
    card.style.transform = `rotateX(${y}deg) rotateY(${x}deg) scale(1.05)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0) rotateY(0) scale(1)';
  });
});
