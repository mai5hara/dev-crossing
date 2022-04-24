import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './component/layout/Navbar';
import Profiles from './component/profiles/Profiles';
import Routes from './component/routing/Routes';
import 'antd/dist/antd.css';
import { ToastContainer } from 'react-toastify';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './store/apiCalls/auth';
import setAuthToken from './utils/setAuthToken';

import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
        <Router>
          <>
            <ToastContainer limit={1} preventDuplicates={false}/>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Profiles} />
              <Route component={Routes} />
            </Switch>
          </>
        </Router>
    </Provider>
  );
};

export default App;
