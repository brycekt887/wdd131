
const form = document.getElementById('eventForm');
const typeSelect = document.getElementById('type');
const credentialContainer = document.getElementById('credentialContainer');
const credentialLabel = document.getElementById('credentialLabel');
const credentialInput = document.getElementById('credential');
const output = document.getElementById('output');


typeSelect.addEventListener('change', function () {
  const choice = typeSelect.value;

  if (choice === 'student') {
    credentialLabel.textContent = 'Student I#';
    credentialInput.value = '';
    credentialContainer.hidden = false;
  } else if (choice === 'guest') {
    credentialLabel.textContent = 'Access Code';
    credentialInput.value = '';
    credentialContainer.hidden = false;
  } else {
    credentialContainer.hidden = true;
  }
});

form.addEventListener('submit', function (event) {
  event.preventDefault();


  output.innerHTML = '';
  const errors = [];

  
  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const email = document.getElementById('email').value.trim();
  const eventDate = document.getElementById('eventDate').value;
  const type = typeSelect.value;
  const credential = credentialInput.value.trim();

  
  if (firstName === '') {
    errors.push('Please enter your first name.');
  }
  if (lastName === '') {
    errors.push('Please enter your last name.');
  }

  
  if (email === '') {
    errors.push('Please enter your email.');
  }


  if (eventDate === '') {
    errors.push('Please choose an event date.');
  } else {
    const today = new Date();
    today.setHours(0, 0, 0, 0); 
    const chosen = new Date(eventDate + 'T00:00:00'); 
    if (chosen <= today) {
      errors.push('Event date must be later than today.');
    }
  }

  
  if (type === '') {
    errors.push('Please choose a type.');
  } else if (type === 'student') {
    
    if (!/^\d{9}$/.test(credential)) {
      errors.push('Student I# must be 9 digits');
    }
  } else if (type === 'guest') {
    
    if (credential !== 'EVENT131') {
      errors.push('Access Code is incorrect');
    }
  }

  
  if (errors.length > 0) {
    showErrors(errors);
  } else {
    showTicket(firstName, lastName, type);
    form.reset();
    credentialContainer.hidden = true;
  }
});

function showErrors(errors) {
  let html = '<div class="errors">';
  for (const message of errors) {
    html += '<p>' + message + '</p>';
  }
  html += '</div>';
  output.innerHTML = html;
}


function showTicket(firstName, lastName, type) {

  const now = new Date();
  const created =
    now.getFullYear() + '-' +
    String(now.getMonth() + 1).padStart(2, '0') + '-' +
    String(now.getDate()).padStart(2, '0');

  output.innerHTML =
    '<div class="ticket">' +
    '<h2>Ticket Created</h2>' +
    '<p>' + firstName + ' ' + lastName + '</p>' +
    '<p>' + type + '</p>' +
    '<p>' + created + '</p>' +
    '</div>';
}