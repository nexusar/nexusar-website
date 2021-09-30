import { Container, Divider } from '@mui/material';
import { Box } from '@mui/system';
import { Fragment, useEffect } from 'react';
import { auth } from '../../services/firebase.js';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import Loading from '../Loading.js';
import signOut from '../../services/auth/sign-out.js';
import DashboardNav from '../../components/Dashboard/DashboardNav/DashboardNav.js';

const Dashboard = () => {
  const history = useHistory();
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (error) alert(error);

    if (loading) return <Loading />;
    if (!user) history.replace('/login');
  }, [user, loading, error, history]);

  return (
    <Fragment>
      <Box sx={{ height: 50 }} />
      <Container sx={{ py: 1 }}>
        <h3>User Dashboard</h3>
      </Container>
      <Divider light />

      {user && (
        <Container sx={{ display: 'flex', justifyContent: 'end', py: 2 }}>
          <small>{user.displayName}</small>
          <Divider orientation="vertical" sx={{ mx: 2, height: 20 }} />
          <small>
            <Link to={'#'} style={{ color: '#0071e3' }} onClick={signOut}>
              Logout
            </Link>
          </small>
        </Container>
      )}
      <DashboardNav />
    </Fragment>
  );
};

export default Dashboard;
