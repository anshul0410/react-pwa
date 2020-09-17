import React from 'react';
import {connect} from 'react-redux';

const DetailContainer = () => {
    return(
        <div>
            <h4>Detail container</h4>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        
    }
}
export default connect(mapStateToProps)(DetailContainer)