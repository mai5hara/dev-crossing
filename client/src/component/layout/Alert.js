import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// const Alert = ( alerts ) => {
const notify = (msg) =>
  toast.error(msg, {
    theme: 'colored',
    position: 'top-center',
  });

export const alert = (alerts) => {
  console.log(alerts);
  if (alerts !== null && alerts.length > 0) {
    alerts.map((alert) => {
      return notify(alert.msg);
    });
  }
};
// };
// alerts !== null && alerts.length > 0 && alerts.map(alert => (
//   <div key={alert.id} className={`alert alert-${alert.alertType}`}>
//     { alert.msg }
//   </div>
// ));

// Alert.propTypes = {
//   alerts: PropTypes.array.isRequired,
// };

// const mapStateToProps = (state) => ({
//   alerts: state.alert,
// });

// export default Alert;
