import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

form.addEventListener('input', throttle(function() {
  const feedbackState = { email: emailInput.value, message: messageInput.value };
  localStorage.setItem('feedback-form-state', JSON.stringify(feedbackState));
}, 500));

const storedState = JSON.parse(localStorage.getItem('feedback-form-state'));

if (storedState) {
  emailInput.value = storedState.email;
  messageInput.value = storedState.message;
}

form.addEventListener('submit', function(event) {

  if (emailInput.value.length === 0 || messageInput.value.length === 0) {
    return alert('Fill in all fields');
  } else {
    event.preventDefault();

    localStorage.removeItem('feedback-form-state');
  
    const feedbackData = { email: emailInput.value, message: messageInput.value };
    console.log(feedbackData);
  
    emailInput.value = '';
    messageInput.value = '';
  }
 
});



