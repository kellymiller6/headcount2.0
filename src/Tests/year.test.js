import React from 'react';
import { shallow, mount } from 'enzyme';
import Year from '../Components/Year.js';


describe ('Year', ()=>{
  it('has a class of below',()=>{
    const wrapper = shallow(<Year />)
      expect(wrapper.is('.below')).toEqual(true)
  })

  it('has a class of above',()=>{
    expect(wrapper.is('.below')).toEqual(true
  })

})
