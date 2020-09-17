import React from 'react';
import {connect} from 'react-redux';

const DashboardContainer = () => {
    return(
        <div>
            <h4>Dashboard container</h4>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        
    }
}
export default connect(mapStateToProps)(DashboardContainer)