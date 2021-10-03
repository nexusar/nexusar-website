import { Container, Divider, Grid } from '@mui/material';
import { Box } from '@mui/system';
import { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { getEmployeePersonalInfo, getEmployeeBankInfo } from '../../../services/firestore-queries';

const EmployeeComplete = (props) => {
  const { uid, setShowSupervisedEmployee } = props;

  const [personalData, setPersonalData] = useState('');
  const [bankData, setBankData] = useState('');

  useEffect(() => {
    getEmployeePersonalInfo(uid, setPersonalData);
    getEmployeeBankInfo(uid, setBankData);
  }, [uid]);

  const dataList = [
    { label: 'Personal Details', variable: personalData },
    { label: 'Bank Details', variable: bankData },
  ];

  const goBackClickHandler = () => {
    setShowSupervisedEmployee(false);
  };

  return (
    <Fragment>
      <Container>
        <Link to="#" className="button" style={{ marginRight: '10px' }} onClick={goBackClickHandler}>
          Go Back
        </Link>
        <Link to="#" className="button" style={{ marginLeft: '10px' }}>
          Print Details
        </Link>
        {dataList.map((data) => (
          <Box key={data.label} sx={{ py: 2 }}>
            <h4>{data.label}</h4>
            <Divider light style={{ margin: '8px 0' }} />
            <Grid container>
              {data.variable &&
                Object.entries(data.variable).map(([key, value]) => {
                  if (value)
                    return (
                      <Fragment key={key}>
                        <Grid item xs={5}>
                          {key}
                        </Grid>
                        <Grid item xs={7}>
                          {value}
                        </Grid>
                      </Fragment>
                    );
                  else return <Fragment key={key} />;
                })}
            </Grid>
          </Box>
        ))}
      </Container>
    </Fragment>
  );
};

export default EmployeeComplete;
