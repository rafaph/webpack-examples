function Dialog(message) {
  if (!(this instanceof Dialog)) {
    throw new TypeError("Cannot call a class as a function");
  }
  this.message = message || '';
}

Dialog.prototype.alert = function() {
  alert(this.message);
};

Dialog.prototype.confirm = function() {
  var confirmed = confirm(this.message);
  if (confirmed) {
    alert('you confirmed!');
  } else {
    alert('you not confirmed! :(');
  }
};

Dialog.prototype.prompt = function() {
  var value = prompt(this.message);
  if (value) {
    alert('You typed "' + value + '".');
  }
};

module.exports = Dialog;
