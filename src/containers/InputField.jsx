import React, {Component} from 'react';
import {connect} from "react-redux";

import {setInputValue} from '../actions';
import {fetchServerConfigurations} from '../actions'

export class InputField extends Component {

    componentDidUpdate(prevProps) {
        if(prevProps.inputValue !== this.props.inputValue) {
            this.props.fetchServerConfigurations('api.tenable.io', this.props.inputValue)
        }
    }

    handleChange = (event) => {
        if(event.target.value.length > 4) return;
        this.props.setInputValue(event.target.value);
    };

    render() {
        const {inputValue} = this.props;
        return (
            <div className="form-group InputField">
                <label className='col-lg-12' style={{padding: 0}}>Enter number of expected records:</label>
                <div className='col-lg-3' style={{padding: 0}}>
                <input
                    name="host"
                    className="form-control"
                    type="number"
                    min={0}
                    max={9999}
                    step={1}
                    onChange={this.handleChange}
                    value={inputValue}
                />
                <small className="form-text text-muted">Table data will be generated</small>
                </div>
            </div>
        );
    }
}

export default connect(state => ({inputValue: state.inputValue}), {setInputValue, fetchServerConfigurations})(InputField);