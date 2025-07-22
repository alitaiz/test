document.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('greetButton');
  var nameInput = document.getElementById('nameInput');
  var greeting = document.getElementById('greeting');

  button.addEventListener('click', function() {
    var name = nameInput.value.trim();
    if (name) {
      greeting.textContent = 'Hello, ' + name + '!';
    } else {
      greeting.textContent = 'Please enter your name.';
    }
  });
});
