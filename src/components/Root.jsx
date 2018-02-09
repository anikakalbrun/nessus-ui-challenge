import React from 'react';

import CustomRow from '../components/CustomRow';
import Header from '../components/Header';
import InputField from '../containers/InputField';
import Table from '../containers/Table';
import TableHeader from '../components/TableHeader';
import './Root.css';

function Root() {
    return (
        <div className="App">
            <Header/>
            <TableHeader/>
            <CustomRow><InputField/></CustomRow>
            <CustomRow><Table/></CustomRow>
        </div>)
}

export default Root
