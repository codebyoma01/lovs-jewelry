const form = document.getElementById('preorder-form');
const message = document.getElementById('message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();

  if (!name || !email) {
    message.textContent = 'Please fill in all fields.';
    message.style.color = 'red';
    return;
  }

  message.textContent = `Thank you, ${name}! Your preorder has been received.`;
  message.style.color = '#d8bfa0';
  form.reset();
});
