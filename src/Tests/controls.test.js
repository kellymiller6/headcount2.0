import React from 'react';
import { shallow, mount } from 'enzyme';

import Controls from '../Components/Controls.js';

describe('Controls', () => {

  it('has one input fields', () => {
    const wrapper = shallow(
      <Controls />
    );

    expect(wrapper.find('input').length).toEqual(1);
  });

  it('Default state of empty strings', () => {
    const wrapper = mount(<Controls/>);
    const expectedState = {
      district: ''
    };

    expect(wrapper.state()).toEqual(expectedState);
  });

  it('fires an onChange event on user input which should update both state & the input field', () => {
    const mockedSubmit = jest.fn();
    const mockedFilter = jest.fn();

    const wrapper = mount(
      <Controls handleClick={mockedSubmit}
                handleFilter={mockedFilter}/>
    );
    const input = wrapper.find('input');
    const expectedState = {
      district: 'Colorado',
    };
    input.simulate('change', { target: { value: 'Colorado' } });

    expect(input.node.value).toEqual('Colorado');
    expect(wrapper.state()).toEqual(expectedState);
  });


  it('has a submit button', () => {
    const wrapper = shallow(
      <Controls />
    );

    expect(wrapper.find('button').length).toEqual(1);
  });

  it('fires handleClick function with the data from state as an argument, and input fields go back to empty strings', () => {
    const mockedSubmit = jest.fn();
    const mockedFilter = jest.fn();

    const wrapper = mount(
      <Controls handleClick={mockedSubmit}
                handleFilter={mockedFilter}/>
    );
    const expectedStateAfterChange = {
      district: 'Adams'
    };
    const expectedStateAfterClick = {
      district: ''
    };

    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'Adams' } });
    expect(wrapper.state()).toEqual(expectedStateAfterChange);

    wrapper.find('button').simulate('click');

    expect(wrapper.state()).toEqual(expectedStateAfterClick);
    expect(input.node.value).toEqual('');
    expect(mockedSubmit).toHaveBeenCalledTimes(1);
    expect(mockedSubmit).toHaveBeenCalledWith('Adams')
  });

  it('fires submitIdea function with the data from state as an argument, and input fields go back to empty strings', () => {
    const mockedSubmit = jest.fn();
    const mockedFilter = jest.fn();

    const wrapper = mount(
      <Controls handleClick={mockedSubmit}
                handleFilter={mockedFilter}/>
    );
    const expectedStateAfterChange = {
      district: 'COLORADO'
    };

    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'COLORADO' } });

    expect(wrapper.state()).toEqual(expectedStateAfterChange);
    expect(mockedFilter).toHaveBeenCalledTimes(1);
  });
});
