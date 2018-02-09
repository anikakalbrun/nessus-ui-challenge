import React from 'react';
import Root from '../../components/Root';
import configureMockStore from 'redux-mock-store';
import {Provider} from 'react-redux';

let wrapper;
const mockStore = configureMockStore();
const data = {
    data: {
        configurations: [
            {
                name: 'host1',
                hostname: 'nessus-yjeww-lab.com',
                port: '1612',
                username: 'fnbmh'
            },
            {
                name: 'host2',
                hostname: 'nessus-jxrqd-lab.com',
                port: '3553',
                username: 'qvclw'
            }
        ]
    },
    error: null,
    fetchingServerConfigurations: {
        isFetching: false
    },
    inputValue: 2
}

describe('Root', () => {

    beforeEach(() => {
        wrapper = shallow(<Root/>)
    });

    it('renders a div with class App', () => {
        expect(wrapper.find('div.App').length).toEqual(1)
    });

    it('renders TableHeader', () => {
        expect(wrapper.find('TableHeader').length).toEqual(1)
    });

    it('renders two CustomRow components', () => {
        expect(wrapper.find('CustomRow').length).toEqual(2)
    });

    //TODO: implement test for checking that InputField and Table are present

});
