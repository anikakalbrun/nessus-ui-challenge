import React, {Component} from 'react';
import {array} from 'prop-types';
import {connect} from "react-redux";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

import {fetchServerConfigurations} from '../actions';

const options = {
    sizePerPageList: [{
        text: '5', value: 5
    }, {
        text: '10', value: 10
    }, {
        text: '25', value: 25
    }]
};
const filterType = {type: 'TextFilter', delay: 1000};

export class Table extends Component {

    static propTypes = {
        data: array
    };

    static defaultProps = {
        data: []
    };

    componentWillMount() {
        this.props.fetchServerConfigurations('api.tenable.io', 2)
    }

    render() {
        const {data} = this.props;
        return (
            <BootstrapTable data={data}
                            pagination={true}
                            options={options}
                            hover={true}
                            exportCSV
                            csvFileName={'table-export.csv'}>
                <TableHeaderColumn dataField='name'
                                   filter={filterType}
                                   isKey>Server</TableHeaderColumn>
                <TableHeaderColumn dataField='hostname'
                                   filter={filterType}>Hostname</TableHeaderColumn>
                <TableHeaderColumn dataField='port'
                                   filter={filterType}>Port</TableHeaderColumn>
                <TableHeaderColumn dataField='username'
                                   filter={filterType}>Username</TableHeaderColumn>
            </BootstrapTable>
        );
    }
}

function mapStateToProps(state) {
    return {
        data: state.data.configurations
    };
}

export default connect(mapStateToProps, {fetchServerConfigurations})(Table);