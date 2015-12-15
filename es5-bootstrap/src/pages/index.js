var Dialog = require('../modules/dialog');

var onWindowLoad = function() {
  var dialog = new Dialog('This is a message.');
  dialog.alert(function() {
    dialog.confirm(function() {
      dialog.prompt();
    });
  });
};

var addListeners = function() {
  $(onWindowLoad);
};

var init = function() {
  addListeners();
};

var index = {
  init: init
};

module.exports = index;
