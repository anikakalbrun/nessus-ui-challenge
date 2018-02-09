import React from 'react';
import CustomRow from '../../components/CustomRow';

let wrapper;

describe('CustomRow', () => {
    it('renders correctly', () => {
        wrapper = renderer.create(<CustomRow/>).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('renders its children', () => {
        wrapper = shallow(<CustomRow children={<p/>}/>);
        expect(wrapper.find('p').length).toEqual(1);
    });
});
