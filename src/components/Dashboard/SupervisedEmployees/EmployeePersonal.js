import { useState, useEffect } from 'react';
import { getEmployeePersonalInfo } from '../../../services/firestore-queries';
import { Box } from '@mui/system';
import { Grid, Divider, Avatar } from '@mui/material';

const EmployeePersonal = (props) => {
  const { uid } = props;
  const [personalData, setPersonalData] = useState('');
  useEffect(() => {
    getEmployeePersonalInfo(uid, setPersonalData);
  }, [uid]);

  const documentLink = (url, name) => {
    return (
      <a target="_blank" rel="noreferrer" href={url} style={{ color: '#0071e3', textDecoration: 'underline' }}>
        {name}
      </a>
    );
  };

  const dataList = [
    {
      label: 'Profile Picture',
      value: (
        <Avatar
          alt={personalData.firstNameValue}
          sx={{ width: 100, height: 100, my: 2 }}
          src={personalData.profilePictureValue}
        />
      ),
    },
    { label: 'First Name', value: personalData.firstNameValue },
    { label: 'Last Name', value: personalData.lastNameValue },
    { label: "Father's Name", value: personalData.fathersNameValue },
    { label: "Mother's Name", value: personalData.mothersNameValue },
    { label: 'Date of Birth', value: personalData.DOBValue },
    { label: 'Phone Number', value: personalData.phoneValue },
    { label: 'Office Phone', value: personalData.officePhoneValue },
    { label: 'Complete Address', value: personalData.addressValue },
    { label: 'Description', value: personalData.describeValue },
    { label: 'State', value: personalData.stateValue },
    { label: 'Adhaar Number', value: personalData.adhaarNumberValue },
    { label: 'PAN (in PDF)', value: documentLink(personalData.PANValue, 'Pan-Card.pdf') },
    { label: 'Adhaar (in PDF)', value: documentLink(personalData.adhaarValue, 'Adhaar-Card.pdf') },
    { label: 'Reference 1', value: personalData.reference1Value },
    { label: 'Reference 2', value: personalData.reference2Value },
    { label: 'Mode of Transport', value: personalData.modeOfTransportValue },
  ];

  return (
    <Box sx={{ py: 2 }}>
      <h4>Personal Details</h4>
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

export default EmployeePersonal;
