// navbar
const header = document.querySelector('header');
const fixNav = header.offsetTop;

window.addEventListener('scroll', () => {
  if (window.scrollY > fixNav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
});

// hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
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
