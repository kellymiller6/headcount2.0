import React from 'react';
import { shallow, mount } from 'enzyme';
import ReactDOM from 'react-dom';
import DistrictRepository from '../../src/helper';
import kinderData from '../../data/kindergartners_in_full_day_program.js';
import App from '../Components/App.js';

describe('Card shallow mount tests', () => {
  const repository = new DistrictRepository(kinderData)

  it('renders App with className app', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.find('.app').length).toEqual(1)
    expect(wrapper.find('div.app').hasClass('app')).toBe(true);
  });

  it('initial state starts with an empty array', () => {
    const wrapper = shallow(<App />)
    const expectedState = {
      districtData: repository.data,
      compareArray: []
    };

  expect(wrapper.state()).toEqual(expectedState);
  });

});

describe('App --> mount', () => {
  let wrapperMount

  beforeEach(() => {
    wrapperMount = mount(<App />)
  })

  it('should display the correct number of cards based on data in state', () => {
    const foundCards = wrapperMount.find('.district-card')

    expect(foundCards.length).toEqual(181)
  })

  it('should display the compare card area after clicking on card', () => {
    const repo = new DistrictRepository(kinderData)
    const cardOne = wrapperMount.find('.district-card').first()
    const expectedState = { districtData: repo.data, compareArray: ['Colorado']}

    cardOne.simulate('click')

    expect(wrapperMount.state()).toEqual(expectedState)
    expect(wrapperMount.find('.top-compare').length).toEqual(1)
  })

  it('clicking on two cards will create comparison selection with new comparitive card', () => {
    const repo = new DistrictRepository(kinderData)
    const cardOne = wrapperMount.find('.district-card').first()
    const cardTwo = wrapperMount.find('.district-card').last()
    const expectedState = { districtData: repo.data, compareArray: ['Colorado', 'YUMA SCHOOL DISTRICT 1']}

    cardOne.simulate('click')
    cardTwo.simulate('click')

    expect(wrapperMount.state()).toEqual(expectedState)
    expect(wrapperMount.find('.top-compare').length).toEqual(1)
    expect(wrapperMount.find('.compared').length).toEqual(1)

  })
})
