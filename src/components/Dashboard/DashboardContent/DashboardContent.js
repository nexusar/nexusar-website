import { Fragment, useState } from 'react';
import { Container, Divider } from '@mui/material';
import { Box } from '@mui/system';
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

      <SupervisedEmployeesList
        setShowSupervisedEmployee={setShowSupervisedEmployee}
        setSupervisedUID={setSupervisedUID}
      />
      <Container>
        <Box py={2}>
          <h4>Some important things to keep in mind while filling details in the user portal</h4>
          <Divider light />
          <Container sx={{ py: 1 }}>
            <ul>
              <li>
                Make sure all the fields are filled. Degree certificates and Gradesheets are not compulsory to upload if
                you don't have them.
              </li>
              <li>
                If some field is a text and not applicable enter <strong>NA</strong>, if it's a number enter{' '}
                <strong>0</strong>.
              </li>
              <li>
                While uploading images or documents, do not navigate away from the page if you see a Spinner. Navigating
                without clicking on the Save Changes button will cause data to be lost.
              </li>
              <li>
                <strong>Salary</strong> and <strong>attendance</strong> section will be updated soon!
              </li>
            </ul>
          </Container>
        </Box>
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
