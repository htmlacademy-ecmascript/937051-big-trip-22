import {render} from './render.js';
import FilterView from './view/filter-view.js';
import TripInfoView from './view/trip-info-view.js';
import TripPresenter from './presenter/trip-presenter.js';

const filterElement = document.querySelector('.trip-controls__filters');
const tripEventsElement = document.querySelector('.trip-events');
const tripMainElement = document.querySelector('.trip-main');
const tripPresenter = new TripPresenter({tripContainer: tripEventsElement});

render(new TripInfoView(), tripMainElement, 'afterbegin');
render(new FilterView(), filterElement);

tripPresenter.init();
