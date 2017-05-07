import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from '../Components/Card.js'
import Cards from '../Components/Cards.js'
import DistrictRepository from '../helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program';


describe('Cards',()=>{
  const districtData = new DistrictRepository(kinderData)
  const wrapper = shallow(
      <Card district={ districtData[district].location }
          data={ districtData[district].data }/>)


  it('has a card-container class field', () => {
    console.log(districtData)
  expect(wrapper.is('.card-container')).toEqual(true)
});

it('on initation has multiple card class fields', () => {
  const wrapper = mount(<Cards cards={[{title:'title', body:'body'},{title:'title', body:'body'} ]}/>)
  expect(wrapper.find('.district-card').length).toBeGreaterThan(1)
});

})
