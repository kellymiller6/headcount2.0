import React from 'react';
import { shallow, mount } from 'enzyme';

import Card from '../Components/Card.js';
import Year from '../Components/Year.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';
import DistrictRepository from '../../src/helper'
import ReactDOM from 'react-dom';

describe('Year shallow mount tests', () => {
  let wrapper;
  let data = {2004 : 0.24,
              2005 : 0.278,
              2006 : 0.337,
              2007 : 0.395,
              2008 : 0.536,
              2009 : 0.598,
              2010 : 0.64,
              2011 : 0.672,
              2012 : 0.695,
              2013 : 0.703,
              2014 : 0.741}

  beforeEach(() => {
    wrapper = shallow(<Year years={ data } />)
  })

  it('has years className', () => {
    expect(wrapper.find('.years').length).toEqual(1)
  })

  it('has a above and below className for when the data is above or below 0.5', () => {

    expect(wrapper.find('.below').length).toEqual(4)
    expect(wrapper.find('.above').length).toEqual(7)
  })

})
