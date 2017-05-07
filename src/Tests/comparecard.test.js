import React from 'react';
import { shallow, mount } from 'enzyme';
import CompareCard from '../Components/CompareCard.js'
import kinderData from '../../data/kindergartners_in_full_day_program.js';
import DistrictRepository from '../../src/helper'
import ReactDOM from 'react-dom';

describe('Card shallow mount tests', () => {
  let wrapper;
  const repository = new DistrictRepository(kinderData)
  const mockHandleSelect= jest.fn()

  beforeEach(() => {
    wrapper = shallow(<CompareCard repository={repository} districtA={'Colorado'} districtB={'Academy 20'}  />)
  })

  it('has compared-card className', () => {
    expect(wrapper.find('.compared').length).toEqual(1)
  })

  it('has an h3 with a district A className for displaying the location', () => {
    expect(wrapper.find('.districtA-card').length).toEqual(1)
  })

  it('has an h3 with a district B className for displaying the location', () => {
    expect(wrapper.find('.districtB-card').length).toEqual(1)
  })

  it('has a compared card with class name compared card', () => {
    expect(wrapper.find('.compared-card').length).toEqual(1);
  });

})
