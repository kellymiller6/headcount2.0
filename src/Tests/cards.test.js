import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from '../Components/Card.js'
import Cards from '../Components/Cards.js'
import DistrictRepository from '../helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program';

describe('Cards', () => {
  const repository = new DistrictRepository(kinderData)


  it('has class card-container', () => {
    const wrapper = shallow(<Cards districtData={repository.data}/>);
    expect(wrapper.find('.card-container').length).toEqual(1);
  });

  it('should have 181 cards with class district card', () => {
    const wrapper = mount(<Cards districtData={repository.data} repository={repository} compareArray={[]}/>)
    expect(wrapper.find('.district-card').length).toEqual(181)
  });

});
