import bootstrap from 'bootstrap';
import bootbox from 'bootbox';

class Dialog {
  constructor(message = '') {
    this.message = message;
  }
  alert(callback) {
    bootbox.alert(this.message, callback);
  }
  confirm(callback) {
    bootbox.confirm(this.message, (confirmed) => {
      if(confirmed) {
        bootbox.alert('you confirmed!', callback);
      } else {
        bootbox.alert('you not confirmed! :(', callback);
      }
    });
  }
  prompt(callback) {
    bootbox.prompt(this.message, (value) => {
      if(value) {
        bootbox.alert(`You typed "${value}".`, callback);
      }
    });
  }
}

export default Dialog;
