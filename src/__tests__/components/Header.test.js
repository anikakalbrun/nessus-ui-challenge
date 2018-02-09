import React from 'react';
import Header from '../../components/Header';

let wrapper;

describe('Header', () => {

    it('renders correctly', () => {
        wrapper = renderer.create(<Header/>).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
});
