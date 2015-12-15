var Dialog = require('../modules/dialog');

var onWindowLoad = function() {
  var dialog = new Dialog('This is a message.');
  dialog.alert();
  dialog.confirm();
  dialog.prompt();
};

var addListeners = function() {
  window.onload = onWindowLoad;
};

var init = function() {
  addListeners();
};

var index = {
  init: init
};

module.exports = index;
