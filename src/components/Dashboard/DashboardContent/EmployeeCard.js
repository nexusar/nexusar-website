import { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, CardActions } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import { getEmployeePersonalInfo } from '../../../services/firestore-queries';

const EmployeeCard = (props) => {
  const { uid, position, setShowSupervisedEmployee, setSupervisedUID } = props;
  const [personalData, setPersonalData] = useState('');

  useEffect(() => {
    getEmployeePersonalInfo(uid, setPersonalData);
  }, [uid]);

  let name = 'Personal Details not filled';
  const defaultImage = 'https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg';
  let image = defaultImage;

  if (personalData) {
    name = personalData.firstNameValue + ' ' + personalData.lastNameValue;
    image = personalData.profilePictureValue;
  }

  const clickHandler = () => {
    setShowSupervisedEmployee(true);
    setSupervisedUID(uid);
  };

  return (
    <Card sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent>
          <h4>{name}</h4>
          <p>{position}</p>
        </CardContent>
        <CardActions sx={{ padding: 2 }}>
          <Link to="#" className="button" onClick={clickHandler}>
            View Details
          </Link>
        </CardActions>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 120, height: 'inherit' }}
        image={image}
        alt="Live from space album cover"
      />
    </Card>
  );
};

export default EmployeeCard;
