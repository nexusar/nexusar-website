import { useState, useEffect } from 'react';
import { getEmployeeBankInfo } from '../../../services/firestore-queries';
import { Box } from '@mui/system';
import { Grid, Divider } from '@mui/material';

const EmployeeBank = (props) => {
  const { uid } = props;
  const [bankData, setBankData] = useState('');

  useEffect(() => {
    getEmployeeBankInfo(uid, setBankData);
  }, [uid]);

  const dataList = [
    { label: 'Bank Account Number', value: bankData.accountNumberValue },
    { label: 'IFSC Code', value: bankData.IFSCCodeValue },
    { label: 'Bank Name', value: bankData.bankNameValue },
  ];

  return (
    <Box sx={{ py: 2 }}>
      <h4>Bank Details</h4>
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

export default EmployeeBank;
