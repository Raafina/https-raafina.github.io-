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

document.addEventListener('DOMContentLoaded', () => {
  const darkToggle = document.querySelector('#darkToggle');
  const html = document.documentElement;

  // Cek localStorage
  if (localStorage.getItem('theme') === 'dark') {
    html.classList.add('dark');
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
