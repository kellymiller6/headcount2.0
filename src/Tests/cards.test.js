import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from './Card.js'
import Cards from './Cards.js'

describe('ThoughtList',()=>{

  it('has a thoughtList class field', () => {
  const wrapper = shallow(<ThoughtList thoughtList={[]} />)
  expect(wrapper.find('.thoughtList').length).toEqual(1)
});

it('has multiple ThoughtCard class fields', () => {
  const wrapper = mount(<ThoughtList thoughtList={[{title:'title', body:'body'},{title:'title', body:'body'} ]}/>)
  expect(wrapper.find('.thoughtCard').length).toBeGreaterThan(1)
});

})
