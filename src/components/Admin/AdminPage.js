import AdminEntry from './AdminEntry';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebase';
import Loading from '../../pages/Loading';
import { getAllEmployeesList } from '../../services/firestore-queries';

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
    <Box>
      {allEmployees.length !== 0 &&
        allEmployees.map((employeeData) => <AdminEntry key={Math.random()} employeeData={employeeData} />)}
    </Box>
  );
};

export default AdminPage;
