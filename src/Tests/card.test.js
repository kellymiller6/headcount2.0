import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from '../Components/Card.js'
import kinderData from '../../data/kindergartners_in_full_day_program.js';
import DistrictRepository from '../../src/helper'
import ReactDOM from 'react-dom';

describe('Card shallow mount tests', () => {
  let wrapperShallow;
  const repository = new DistrictRepository(kinderData)
  const mockHandleSelect= jest.fn()
  let years = {2004: 1}

  beforeEach(() => {
    wrapperShallow = shallow(<Card district={'Colorado'} data={years} handleSelect={mockHandleSelect} repository={repository} compareArray={[]} />)
  })

  it('has district-card className', () => {
    expect(wrapperShallow.find('.district-card').length).toEqual(1)
  })

  it('has an h4 with a card-location className for displaying the location', () => {
    expect(wrapperShallow.find('.district-name').length).toEqual(1)
  })

  it('has a Year Componenet', () => {
    expect(wrapperShallow.find('Year').length).toEqual(1);
  });

})

describe('Card mount tests', () => {
  let wrapperMount;
  const repository = new DistrictRepository(kinderData)
  const mockHandleSelect= jest.fn()
  let years = {2004: 1}

  beforeEach(() => {
    wrapperMount = mount(<Card district={'Colorado'} data={years} handleSelect={mockHandleSelect} repository={repository} compareArray={['Colorado']} />)
  })

  it('fires a handleSelect function onClick of the div that gives the card a class of selected-card', () => {
    const card = wrapperMount.find('.district-card')

    expect(card.hasClass('district-card')).toBe(true)
    expect(card.hasClass('selected-card')).toBe(true)

    card.simulate('click')

    expect(mockHandleSelect).toHaveBeenCalledTimes(1)
  })
})
