import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from '../Components/Card.js';

describe('Year', () =>{

  it('has classes with above and below', ()=>{

  })
  it('renders years with a class names of below and above to show years that are above 0.5, and below', () => {
    const wrapper = shallow(<Year />)
    expect(wrapper.find('.above').length).toEqual(1)
    expect(wrapper.find('.below').length).toEqual(1)
  });

})
