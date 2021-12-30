import AdminEntry from './AdminEntry';
import { Fragment, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebase';
import Loading from '../../pages/Loading';
import { getAllEmployeesList } from '../../services/firestore-queries';
import { Grid } from '@mui/material';

const AdminPage = () => {
  const history = useHistory();
  const [user, loading, error] = useAuthState(auth);
  const [allEmployees, setAllEmployees] = useState([]);

  useEffect(() => {
    if (error) alert(error);
    if (loading) return <Loading />;
    if (!user) history.replace('/login');
    if (user) getAllEmployeesList(setAllEmployees);
  }, [user, loading, error, history]);

  return (
    <Fragment>
      <Grid container spacing={4}>
        {allEmployees.length !== 0 &&
          allEmployees.map((employeeData) => (
            <Grid item xs={12} key={Math.random()}>
              <AdminEntry employeeData={employeeData} />
            </Grid>
          ))}
      </Grid>
    </Fragment>
  );
};

export default AdminPage;
