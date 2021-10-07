import { useState, useEffect } from 'react';
import { getEmployeeSkillInfo } from '../../../services/firestore-queries';
import { Box } from '@mui/system';
import { Grid, Divider } from '@mui/material';
import StarRatings from 'react-star-ratings';

const EmployeeSkills = (props) => {
  const { uid } = props;
  const [skillsData, setSkillsData] = useState('');

  useEffect(() => {
    getEmployeeSkillInfo(uid, setSkillsData);
  }, [uid]);

  const stars = (rating) => {
    return (
      <StarRatings
        rating={rating}
        starRatedColor="#0071e3"
        starHoverColor="#0071e3"
        starDimension="24px"
        starSpacing="4px"
      />
    );
  };

  const dataList = [
    { label: 'Arc-GIS experience level', value: stars(skillsData.arcGISRating?.value) },
    { label: 'ENVI experience level', value: stars(skillsData.enviRating?.value) },
    { label: 'SNAP experience level', value: stars(skillsData.snapRating?.value) },
    { label: skillsData.progLang1Rating?.label, value: stars(skillsData.progLang1Rating?.value) },
    { label: skillsData.progLang2Rating?.label, value: stars(skillsData.progLang2Rating?.value) },
    { label: skillsData.progLang3Rating?.label, value: stars(skillsData.progLang3Rating?.value) },
    { label: skillsData.progLang4Rating?.label, value: stars(skillsData.progLang4Rating?.value) },
    { label: skillsData.progLang5Rating?.label, value: stars(skillsData.progLang5Rating?.value) },
  ];

  return (
    <Box sx={{ py: 2 }}>
      <h4>Skills Details</h4>
      <Divider light style={{ margin: '8px 0' }} />
      {dataList.map((data, index) => (
        <Grid key={Math.random()} container sx={{ py: 0.2, alignItems: 'center' }}>
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

export default EmployeeSkills;
