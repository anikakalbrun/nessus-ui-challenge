import React from 'react';
import { Table } from '../../containers/Table';

let wrapper;
const fetchServerConfigurations = jest.fn();
const props = {
    data: [{
        "name": "host1",
        "hostname": "nessus-abc-lab.com",
        "port": "8888",
        "username": "admin"
    }],
    value : "",
    fetchServerConfigurations
};

describe('Table', () => {

    beforeEach(() => {
        wrapper = shallow(<Table {...props}/>);
    });

    it('renders the BootstrapTable component', () => {
        expect(wrapper.find('BootstrapTable').length).toEqual(1);
    });

    it('renders 4 columns', () => {
        expect(wrapper.find('TableHeaderColumn').length).toEqual(4);
    });

    it('first column proper title and filter', () => {
        expect(wrapper.find('TableHeaderColumn').at(0).html()).toMatchSnapshot();
    });

    it('second column proper title and filter', () => {
        expect(wrapper.find('TableHeaderColumn').at(1).html()).toMatchSnapshot();
    });

    it('third column proper title and filter', () => {
        expect(wrapper.find('TableHeaderColumn').at(2).html()).toMatchSnapshot();
    });

    it('fourth column proper title and filter', () => {
        expect(wrapper.find('TableHeaderColumn').at(3).html()).toMatchSnapshot();
    });

    it('pagination is set to true', () => {
        expect(wrapper.find('BootstrapTable').first().props().pagination).toEqual(true);
    });

    it('hover is set to true', () => {
        expect(wrapper.find('BootstrapTable').first().props().hover).toEqual(true);
    });

    it('exportCSV is set to true', () => {
        expect(wrapper.find('BootstrapTable').first().props().exportCSV).toEqual(true);
    });

    it('has proper csvFileName ', () => {
        expect(wrapper.find('BootstrapTable').first().props().csvFileName).toEqual('table-export.csv');
    });



});
