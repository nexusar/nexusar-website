import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { useHistory } from 'react-router';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../services/firebase';
import Loading from '../../../pages/Loading';
import { getSupervisedEmployeesList } from '../../../services/firestore-queries';
import EmployeeCard from './EmployeeCard';

const SupervisedEmployeesList = (props) => {
  const { setShowSupervisedEmployee, setSupervisedUID } = props;
  const history = useHistory();
  const [user, loading, error] = useAuthState(auth);
  const [supervisedEmployees, setSupervisedEmployees] = useState('');

  useEffect(() => {
    if (error) alert(error);
    if (loading) return <Loading />;
    if (!user) history.replace('/login');
    if (user) getSupervisedEmployeesList(user, setSupervisedEmployees);
  }, [user, loading, error, history]);

  console.log(supervisedEmployees);

  return (
    <Grid container spacing="16">
      {supervisedEmployees &&
        supervisedEmployees.map((employee) => (
          <Grid key={employee.uid} item xs={12} sm={6}>
            <EmployeeCard
              uid={employee.uid}
              position={employee.Position}
              setShowSupervisedEmployee={setShowSupervisedEmployee}
              setSupervisedUID={setSupervisedUID}
            />
          </Grid>
        ))}
    </Grid>
  );
};

export default SupervisedEmployeesList;
