import Dialog from '../modules/dialog';

const onWindowLoad = () => {
  const dialog = new Dialog('This is a message.');
    dialog.alert(() =>  dialog.confirm(() => dialog.prompt()));
};

const addListeners = () => {
  $(onWindowLoad);
}

const init = () => {
  addListeners();
};

const index = {
  init: init
}

export default index;
