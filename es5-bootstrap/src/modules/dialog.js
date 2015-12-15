var bootstrap = require('bootstrap');
var bootbox = require('bootbox');

function Dialog(message) {
  if (!(this instanceof Dialog)) {
    throw new TypeError("Cannot call a class as a function");
  }
  this.message = message || '';
}

Dialog.prototype.alert = function(callback) {
  bootbox.alert(this.message, callback);
};

Dialog.prototype.confirm = function(callback) {
  bootbox.confirm(this.message, function(confirmed) {
    if (confirmed) {
      bootbox.alert('you confirmed!', callback);
    } else {
      bootbox.alert('you not confirmed! :(', callback);
    }
  });
};

Dialog.prototype.prompt = function(callback) {
  bootbox.prompt(this.message, function(value) {
    if (value) {
      bootbox.alert('You typed "' + value + '".', callback);
    }
  });
};

module.exports = Dialog;
