import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Alert from '@material-ui/lab/Alert';


const Alerting = ({alerts}) => alerts !== null && alerts.length > 0 && alerts.map(alert => (
    <div className="alert" key={alert.id}>
        <Alert variant="filled" severity={alert.alertType}>{alert.msg}</Alert>
    </div>
))

Alerting.propTypes = {
    alerts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    alerts: state.alert
});

export default connect(mapStateToProps)(Alerting);