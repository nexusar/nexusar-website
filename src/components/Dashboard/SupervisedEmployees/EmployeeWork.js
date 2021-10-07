import { useState, useEffect } from 'react';
import { getEmployeeWorkInfo } from '../../../services/firestore-queries';
import { Box } from '@mui/system';
import { Grid, Divider } from '@mui/material';

const EmployeeWork = (props) => {
  const { uid } = props;
  const [workData, setWorkData] = useState('');

  useEffect(() => {
    getEmployeeWorkInfo(uid, setWorkData);
  }, [uid]);

  const dataList = [
    { label: 'Assigned Projects', value: workData.projectsAssignedValue },
    { label: 'Work Shift', value: workData.workShiftValue },
    { label: 'Cabin Number', value: workData.cabinNumberValue },
    { label: 'Mac Mini Serial Number', value: workData.macSerialNumberValue },
    { label: 'MAC Address', value: workData.MACAddressValue },
    { label: 'IP Address', value: workData.IPAddressValue },
  ];

  return (
    <Box sx={{ py: 2 }}>
      <h4>Work Details</h4>
      <Divider light style={{ margin: '8px 0' }} />
      {dataList.map((data, index) => (
        <Grid key={data.label} container sx={{ py: 0.2, alignItems: 'center' }}>
          <Grid item xs={5}>
            {data.label}
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={6} sx={{ wordWrap: 'break-word' }}>
            {data.value}
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

export default EmployeeWork;
