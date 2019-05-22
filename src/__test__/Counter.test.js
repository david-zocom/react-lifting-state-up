import React from 'react';
import { shallow } from 'enzyme';
import Counter from './../Counter';

describe('Counter', () => {
	test('shallow smoke test', () => {
		shallow(<Counter />);
	})

	test('initial value is 10', () => {
		let wrapper = shallow(<Counter />);
		expect(wrapper.state('value')).toBe(10);
	})

	test('can increase value', () => {
		// arrange
		let wrapper = shallow(<Counter />);
		const initialValue = 23;
		wrapper.setState({ value: initialValue });
		let button = wrapper.find('.increaseButton').at(0);

		// act - klicka på knappen
		button.simulate('click');

		// assert
		expect(wrapper.state('value')).toBe(initialValue + 1);
	})
})





//
