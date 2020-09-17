import React from 'react';
import {connect} from 'react-redux';

const WelcomeContainer = () => {
    return(
        <div>
            <h4>Welcome container</h4>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        
    }
}
export default connect(mapStateToProps)(WelcomeContainer)