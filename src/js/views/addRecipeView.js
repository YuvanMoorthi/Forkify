import View from './View.js';

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _message = 'Recipe was successfully uploaded :)';

  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');

  constructor() {
    super();
    // Add window toggle handlers only if elements exist
    if (this._btnOpen && this._btnClose && this._overlay) {
      this._addHandlerShowWindow();
      this._addHandlerHideWindow();
    }

    // Optional UX: Close modal on ESC key
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && !this._window.classList.contains('hidden')) {
        this.toggleWindow();
      }
    });
  }

  toggleWindow() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  }

  _addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
  }

  _addHandlerHideWindow() {
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
    this._overlay.addEventListener('click', this.toggleWindow.bind(this));
  }

  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      handler(data);
    });
  }

  // No UI markup needed for this View class
  _generateMarkup() {
    throw new Error('No markup needed for AddRecipeView.');
  }
}

export default new AddRecipeView();
