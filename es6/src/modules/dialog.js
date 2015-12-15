class Dialog {
  constructor(message = '') {
    this.message = message;
  }
  alert() {
    alert(this.message);
  }
  confirm() {
    const confirmed = confirm(this.message);
    if(confirmed) {
      alert('you confirmed!');
    } else {
      alert('you not confirmed! :(');
    }
  }
  prompt() {
    const value = prompt(this.message);
    if(value) {
      alert(`You typed "${value}".`);
    }
  }
}

export default Dialog;
