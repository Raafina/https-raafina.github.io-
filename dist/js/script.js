// navbar
const header = document.querySelector('header');
const fixNav = header.offsetTop;
const toTop = document.querySelector('#toTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > fixNav) {
    header.classList.add('navbar-fixed');
    toTop.classList.remove('hidden');
    toTop.classList.add('flex');
  } else {
    header.classList.remove('navbar-fixed');
    toTop.classList.remove('flex');
    toTop.classList.add('hidden');
  }
});

// hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// click outside hamburger
window.addEventListener('click', (e) => {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});

// dark mode
const html = document.documentElement;

// check local storage
if (
  localStorage.getItem('theme') === 'dark' ||
  (!localStorage.getItem('theme') &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  html.classList.add('dark');
  localStorage.setItem('theme', 'dark'); // Default to dark
} else {
  html.classList.remove('dark');
  localStorage.setItem('theme', 'light');
}

document.addEventListener('DOMContentLoaded', () => {
  const darkToggle = document.querySelector('#darkToggle');

  if (localStorage.getItem('theme') === 'dark') {
    darkToggle.checked = true;
  }

  darkToggle.addEventListener('change', () => {
    if (darkToggle.checked) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  });
});

const checkbox = document.getElementById('darkToggle');
const lightSVG = document.getElementById('lightSVG');
const darkSVG = document.getElementById('darkSVG');
const toggleImage = document.getElementById('toggleImage');

// Fungsi untuk mengubah SVG sesuai tema
checkbox.addEventListener('change', function () {
  if (this.checked) {
    // Tampilkan SVG Dark, sembunyikan SVG Light
    lightSVG.classList.add('hidden');
    darkSVG.classList.remove('hidden');
  } else {
    // Tampilkan SVG Light, sembunyikan SVG Dark
    darkSVG.classList.add('hidden');
    lightSVG.classList.remove('hidden');
  }
});

// Setel default berdasarkan localStorage
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'dark') {
    checkbox.checked = true;
    lightSVG.classList.add('hidden');
    darkSVG.classList.remove('hidden');
  } else {
    checkbox.checked = false;
    darkSVG.classList.add('hidden');
    lightSVG.classList.remove('hidden');
  }
});

// send email
document
  .getElementById('contactForm')
  .addEventListener('submit', async function (event) {
    event.preventDefault(); // prevent default form submission

    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xzzdgbvn', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      const messageBox = document.getElementById('formMessage');

      if (response.ok) {
        messageBox.innerHTML = '✅ Message sent successfully!';
        messageBox.classList.add('text-green-600');
        form.reset();
      } else {
        messageBox.innerHTML = '❌ Message failed to send.';
        messageBox.classList.add('text-red-600');
      }
    } catch (error) {
      document.getElementById('formMessage').innerHTML =
        '❌ Something wrong. Try Again';
      document.getElementById('formMessage').classList.add('text-red-600');
    }
  });
