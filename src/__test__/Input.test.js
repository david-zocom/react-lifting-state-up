import React from 'react';
// import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Input from './../Input';

describe('Input', () => {
	let wrapper = null;
	beforeEach(() => {
		wrapper = shallow(<Input />);
	})

	test('shallow smoke test', () => {
		// shallow(<Input />);
		expect(wrapper).toBeTruthy();
	})

	// // det finns ett input element
	// test('has an input element', () => {
	// 	// let element = wrapper.find('input');
	//
	// })

	// initial value

	// rätt sak när change-händelsen inträffar
})






//
