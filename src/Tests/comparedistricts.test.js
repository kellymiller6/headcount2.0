import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from '../Components/Card.js'
import CompareCard from '../Components/CompareCard.js'
import CompareDistricts from '../Components/CompareDistricts.js'
import DistrictRepository from '../helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program';

describe('Compare districts', () => {
  let wrapper;
  const repository = new DistrictRepository(kinderData)
  const mockHandleSelect= jest.fn()


  it('has top compare class if card has been selected', () => {
    const wrapper = shallow(<CompareDistricts  districtData={repository.data} handleSelect={mockHandleSelect} repository={repository} compareArray={['Colorado']} />)

    expect(wrapper.find('.top-compare').length).toEqual(1);
  });

  it('does not have top compare class if card has not been selected', () => {
    const wrapper = shallow(<CompareDistricts  districtData={repository.data} handleSelect={mockHandleSelect} repository={repository} compareArray={[]} />)

    expect(wrapper.find('.top-compare').length).toEqual(0);
  });

  it('will not have compare card component if < 2 cards selected', () => {
    const wrapper = shallow(<CompareDistricts  districtData={repository.data} handleSelect={mockHandleSelect} repository={repository} compareArray={[]} />)

    expect(wrapper.find(CompareCard).length).toEqual(0);
  });

  it('will have compare card component if  2 cards selected', () => {
    const wrapper = shallow(<CompareDistricts  districtData={repository.data} handleSelect={mockHandleSelect} repository={repository} compareArray={['Colorado', 'ACADEMY 20']} />)

    expect(wrapper.find(CompareCard).length).toEqual(1);
  });

  it.skip('fires a handleSelect function onClick of the div that gives the card a class of selected-card', () => {
    const wrapper = mount(<CompareDistricts  districtData={repository.data} handleSelect={mockHandleSelect} repository={repository} compareArray={['Colorado', 'ACADEMY 20']} />)
    console.log(wrapper.debug())
    const card = wrapper.find('CHERRY CREEK 5')
    console.log('card', card)
    console.log('before click', wrapper.debug())
    card.simulate('click')
    console.log('after click', wrapper.debug())
    expect(wrapper.find('.selected-card').length).toEqual(1)
    expect(mockHandleSelect).toHaveBeenCalledTimes(1)
  })


});
