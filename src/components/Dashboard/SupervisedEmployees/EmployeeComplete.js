import { Fragment, useState } from 'react';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';
import html2pdf from 'html2pdf.js';
import EmployeeAcademic from './EmployeeAcademic';
import EmployeePersonal from './EmployeePersonal';
import EmployeeWork from './EmployeeWork';
import EmployeeBank from './EmployeeBank';
import EmployeeSkills from './EmployeeSkills';
import SuccessSnackbar from '../SuccessSnackbar';

const EmployeeComplete = (props) => {
  const { uid, setShowSupervisedEmployee } = props;
  const [open, setOpen] = useState(false);

  const goBackClickHandler = () => {
    setShowSupervisedEmployee(false);
  };

  const printEmployeeDetails = () => {
    setOpen(true);
    const element = document.getElementById('employee-complete');
    html2pdf(element);
  };

  return (
    <Fragment>
      <Container>
        <Link to="#" className="button" style={{ marginRight: '10px' }} onClick={goBackClickHandler}>
          Go Back
        </Link>
        <Link to="#" className="button" style={{ marginLeft: '10px' }} onClick={printEmployeeDetails}>
          Print Details
        </Link>
      </Container>
      <Container id="employee-complete">
        <h3 style={{ paddingTop: '16px' }}>Supervised Employee Details</h3>
        <EmployeePersonal uid={uid} />
        <EmployeeAcademic uid={uid} />
        <EmployeeWork uid={uid} />
        <EmployeeSkills uid={uid} />
        <EmployeeBank uid={uid} />
      </Container>
      <SuccessSnackbar open={open} setOpen={setOpen} info="Generating a PDF file for you!" />
    </Fragment>
  );
};

export default EmployeeComplete;
