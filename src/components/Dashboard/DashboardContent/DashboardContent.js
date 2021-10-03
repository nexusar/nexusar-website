import { Fragment, useState } from 'react';
import { Container, Divider } from '@mui/material';
import DashboardNav from '../DashboardNav/DashboardNav';
import SupervisedEmployeesList from './SupervisedEmployeesList';
import EmployeeComplete from '../SupervisedEmployees/EmployeeComplete';

const DashboardContent = (props) => {
  const { user } = props;

  const [showSupervisedEmployee, setShowSupervisedEmployee] = useState(false);
  const [supervisedUID, setSupervisedUID] = useState('');

  const greetingComponent = (
    <Fragment>
      <Container sx={{ py: 4 }}>
        <h2>Welcome {user.displayName.split(' ')[0]}.</h2>
        <p>
          This is your personal dashboard. Feel free to browse through the sections to read, or edit information about
          yourself, your work and other details.
        </p>
      </Container>

      <Container>
        <h3>People you manage</h3>
        <Divider light style={{ magrinTop: '8px', marginBottom: '16px' }} />
        <SupervisedEmployeesList
          setShowSupervisedEmployee={setShowSupervisedEmployee}
          setSupervisedUID={setSupervisedUID}
        />
      </Container>
    </Fragment>
  );

  const [dashboardBody, setDashboardBody] = useState(greetingComponent);
  const selectComponent = (component) => {
    setDashboardBody(component);
  };

  return (
    <Fragment>
      {showSupervisedEmployee && (
        <Fragment>
          <EmployeeComplete uid={supervisedUID} setShowSupervisedEmployee={setShowSupervisedEmployee} />
        </Fragment>
      )}
      {!showSupervisedEmployee && (
        <Fragment>
          <DashboardNav onSelect={selectComponent} />
          {dashboardBody}
        </Fragment>
      )}
    </Fragment>
  );
};

export default DashboardContent;
