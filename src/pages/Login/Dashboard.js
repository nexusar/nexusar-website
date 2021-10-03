import { Container, Divider } from '@mui/material';
import { Box } from '@mui/system';
import { Fragment, useEffect, useState } from 'react';
import { auth } from '../../services/firebase.js';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import Loading from '../Loading.js';
import signOut from '../../services/auth/sign-out.js';
import DashboardContent from '../../components/Dashboard/DashboardContent/DashboardContent.js';
import NotUser from './NotUser.js';
import { checkEmployeeExists } from '../../services/firestore-queries.js';

const Dashboard = () => {
  const history = useHistory();
  const [user, loading, error] = useAuthState(auth);
  const [isEmployee, setIsEmployee] = useState(undefined);

  useEffect(() => {
    if (error) alert(error);
    if (loading) return <Loading />;
    if (!user) history.replace('/login');

    if (user) checkEmployeeExists(user, setIsEmployee);
  }, [user, loading, error, history]);

  return (
    <Fragment>
      <Box sx={{ height: 50 }} />
      <Container sx={{ py: 1 }}>
        <h3>User Dashboard</h3>
      </Container>
      <Divider light />

      {isEmployee === undefined && <Loading />}
      {isEmployee === false && <NotUser userType="employee" />}

      {user && isEmployee && (
        <Fragment>
          <Container sx={{ display: 'flex', justifyContent: 'end', py: 2 }}>
            <small>{user.displayName}</small>
            <Divider orientation="vertical" sx={{ mx: 2, height: 20 }} />
            <small>
              <Link to={'#'} style={{ color: '#0071e3' }} onClick={signOut}>
                Logout
              </Link>
            </small>
          </Container>

          <DashboardContent user={user} />
        </Fragment>
      )}
    </Fragment>
  );
};

export default Dashboard;
