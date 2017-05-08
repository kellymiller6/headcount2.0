import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from '../Components/Card.js'
import kinderData from '../../data/kindergartners_in_full_day_program.js';
import DistrictRepository from '../../src/helper'
import ReactDOM from 'react-dom';

describe('Card shallow mount tests', () => {
  let wrapper;
  const repository = new DistrictRepository(kinderData)
  const mockHandleSelect= jest.fn()
  let years = {2004: 1}

  beforeEach(() => {
    wrapper = shallow(<Card district={'Colorado'} data={years} handleSelect={mockHandleSelect} repository={repository} compareArray={[]} />)
  })

  it('has district-card className', () => {
    expect(wrapper.find('.district-card').length).toEqual(1)
  })

  it('has an h4 with a card-location className for displaying the location', () => {
    expect(wrapper.find('.district-name').length).toEqual(1)
  })

  it('has a Year Componenet', () => {
    expect(wrapper.find('Year').length).toEqual(1);
  });

})

describe('Card mount tests', () => {
  let wrapper;
  const repository = new DistrictRepository(kinderData)
  const mockHandleSelect= jest.fn()
  let years = {2004: 1}


  it('fires a handleSelect function onClick of the div that gives the card a class of selected-card', () => {
    const wrapper = mount(<Card district={'Colorado'} data={years} handleSelect={mockHandleSelect} repository={repository} compareArray={['Colorado']} />)
    const card = wrapper.find('.district-card')

    expect(card.hasClass('selected-card')).toBe(true)

    card.simulate('click')
    expect(wrapper.find('.selected-card').length).toEqual(1)
    expect(mockHandleSelect).toHaveBeenCalledTimes(1)
  })

  it('if card is not selected it will not have selected card class', () => {
    const wrapper = mount(<Card district={'Colorado'} data={years} handleSelect={mockHandleSelect} repository={repository} compareArray={[]} />)
    const card = wrapper.find('.district-card')

    expect(card.hasClass('district-card')).toBe(true)
    expect(card.hasClass('selected-card')).toBe(false)

  })
})
