/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { useEffect } from 'react';
import { Tabs, Button } from 'antd';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import Experience from './Experience';
import Education from './Education';
import DashboardProfile from './DashboardProfile';
import { deleteAccount, getCurrentProfile } from '../../actions/profile';
import { dashboard, userName, message } from './dashboard.style';
import { btnStyle } from '../ui/Button.style';

const Dashboard = ({
  getCurrentProfile,
  auth,
  profile: { profile, loading },
}) => {
  const { TabPane } = Tabs;
  const history = useHistory();

  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <div css={dashboard}>
      <h1>Dashboard</h1>
      <p css={userName}>
        <span>
          <i className="fas fa-user"></i>
        </span>
        Welcome {auth.user && auth.user.name}
      </p>
      {profile !== null ? (
        <>
          <Tabs defaultActiveKey="1" type="card">
            <TabPane tab="Profile" key="1">
              <DashboardProfile profile={profile} auth={auth} />
            </TabPane>
            <TabPane tab="Experience" key="2">
              <Experience experience={profile.experience} />
            </TabPane>
            <TabPane tab="Education" key="3">
              <Education education={profile.education} />
            </TabPane>
          </Tabs>
        </>
      ) : (
        <>
          <p css={message}>
            You have not yet setup a profile, please add some info
          </p>
          <Button
            css={btnStyle('primary')}
            onClick={() => history.push('/create-profile')}
          >
            Create Profile
          </Button>
        </>
      )}
    </div>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
