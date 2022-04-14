import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


const Alert = ({ alerts }) =>  {
  const notify = (alert) =>
    toast.error(alert.msg, {
      theme: 'colored',
      position: 'top-center',
    })
    toast.clearWaitingQueue({ containerId: alert.id });

  // eslint-disable-next-line react/style-prop-object
  return (
    <>
      {
        alerts !== null && alerts.length > 0 && alerts.map(alert => {
          notify(alert)
          return (
            <div key={alert.id} style={{display:"none"}}></div>
          )
        })
      }
    </>
  )
}

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);