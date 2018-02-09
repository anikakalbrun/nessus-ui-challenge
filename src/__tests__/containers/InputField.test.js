import React from 'react';
import { InputField } from '../../containers/InputField';

let wrapper;
const setInputValue = jest.fn();
const fetchServerConfigurations = jest.fn();
const props = {
    inputValue: '12',
    setInputValue,
    fetchServerConfigurations
};

describe('InputField', () => {

    it('renders correctly', () => {
        wrapper = renderer.create(<InputField {...props}/>).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('input field value change calls setInputValue action', () => {
        wrapper = shallow(<InputField {...props}/>);
        wrapper.find('input').simulate('change', {target: {value: '22'}});
        expect(setInputValue).toHaveBeenCalled()
    });

    it('fetchServerConfigurations action gets called when component receives new props: inputValue', () => {
        wrapper = mount(<InputField {...props}/>);
        wrapper.setProps({ 'inputValue': '10' });
        expect(fetchServerConfigurations).toHaveBeenCalled();
    });
});
