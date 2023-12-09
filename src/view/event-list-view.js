import {createElement} from '../render.js';

function eventListTemplate() {
  return `
    <ul class="trip-events__list"></ul>
  `;
}

export default class EventListView {
  getTemplate() {
    return eventListTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
