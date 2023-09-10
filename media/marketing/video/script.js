// ParticlesJS Config.
particlesJS('particles-js', {
  particles: {
    number: { value: 40, density: { enable: true, value_area: 800 } },
    color: { value: '#ffffff' },
    shape: {
      type: 'circle',
      stroke: { width: 0, color: '#000000' },
      polygon: { nb_sides: 5 },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: { enable: false },
  },
  retina_detect: true,
});

const textElement = document.getElementById('text');
const strText = 'Check out the Lotus Programming Language at BreakerLabs.com';
let arrayText = strText.split('');
let typeTimer;

function type() {
  if (arrayText.length > 0) {
    textElement.innerHTML += arrayText.shift();
  } else {
    clearTimeout(typeTimer);
  }
  typeTimer = setTimeout(type, 100);
}

// Start typing effect after 3 seconds to allow other animations to complete
setTimeout(type, 3000);
