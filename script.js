const imgOffset = -50;
const textOffset = -120;
const drag = 8;

document.addEventListener('DOMContentLoaded', (e) => {
  const text = document.getElementsByClassName('text')[0];
  const bush = document.getElementsByClassName('bush')[0];
  const house = document.getElementsByClassName('house')[0];

  window.addEventListener('scroll', (se) => {
    const newOffset = imgOffset + window.scrollY / drag;
    if (newOffset < 0) {
      house.style.bottom = newOffset + 'px';
      bush.style.bottom = newOffset + 'px';
    }

    const newTextOffset = textOffset - window.scrollY / drag;
    text.style.marginTop = newTextOffset + 'px';
  });
});
