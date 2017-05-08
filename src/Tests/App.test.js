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
