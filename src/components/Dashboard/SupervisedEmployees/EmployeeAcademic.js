import { useState, useEffect } from 'react';
import { getEmployeeAcademicInfo } from '../../../services/firestore-queries';
import { Box } from '@mui/system';
import { Grid, Divider } from '@mui/material';

const EmployeeAcademic = (props) => {
  const { uid } = props;
  const [academicData, setAcademicData] = useState('');
  useEffect(() => {
    getEmployeeAcademicInfo(uid, setAcademicData);
  }, [uid]);

  const documentLink = (url, name) => {
    if (!name) name = url;
    return (
      <a target="_blank" rel="noreferrer" href={url} style={{ color: '#0071e3', textDecoration: 'underline' }}>
        {name}
      </a>
    );
  };

  const dataList = [
    { label: 'Resume (in PDF)', value: documentLink(academicData.resumeValue, 'Resume.pdf') },
    { label: 'Linkedin Profile', value: documentLink(academicData.linkedinProfileValue) },
    { label: 'Email Address', value: academicData.emailAddressValue },
    { label: 'Offical Email Address', value: academicData.officalEmailAddressValue },
    { label: 'UG College Name', value: academicData.UGCollegeNameValue },
    { label: 'UG CGPA (or current CGPA)', value: academicData.UGCGPAValue },
    { label: 'UG Gradesheet (in PDF)', value: documentLink(academicData.UGGradeSheetValue, 'UG-Gradesheet.pdf') },
    { label: 'UG Degree (in PDF)', value: documentLink(academicData.UGDegreeSheetValue, 'UG-Degree.pdf') },
    { label: 'PG College Name', value: academicData.PGCollegeNameValue },
    { label: 'PG CGPA (or current CGPA)', value: academicData.PGCGPAValue },
    { label: 'PG Gradesheet (in PDF)', value: documentLink(academicData.PGGradeSheetValue, 'PG-Gradesheet.pdf') },
    { label: 'PG Degree (in PDF)', value: documentLink(academicData.PGDegreeSheetValue, 'PG-Degree.pdf') },
  ];

  return (
    <Box sx={{ py: 2 }}>
      <h4>Academic Details</h4>
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

export default EmployeeAcademic;
