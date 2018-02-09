import React from 'react';
import {node} from 'prop-types';

CustomRow.propTypes = {
    children: node
};

export default function CustomRow({children}) {
    return (
        <div className='p-10'>
            <div className='row'>
                <div className='col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-sm-offset-2 col-lg-offset-2'>
                    {children}
                </div>
            </div>
        </div>
    )
}



