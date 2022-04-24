import uuid from 'uuid';
import { set_alert, remove_alert } from '../features/alertSlice';

export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
  const id = uuid.v4();
  dispatch(set_alert({ msg, alertType, id }))

  setTimeout(() => dispatch(remove_alert(id)), timeout);
}