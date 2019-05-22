import React from 'react';
// import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Status from './../Status';

describe('Status', () => {
	test('shallow smoke test', () => {
		shallow(<Status />);
	})

	test('receives initial data', () => {
		const data = 'unicorn table';
		let wrapper = shallow(<Status data={data} />);
		let expected = (<div>The field has the value: "{data}"</div>);
		expect(wrapper.contains(expected)).toBe(true);
	})
})
