import React from 'react';
import TableHeader from '../../components/TableHeader';

let wrapper;

describe('TableHeader', () => {

    it('renders correctly', () => {
        wrapper = renderer.create(<TableHeader/>).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
});
