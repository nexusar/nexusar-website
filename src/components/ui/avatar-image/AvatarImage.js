import { Box } from '@mui/system';
import { Avatar, IconButton } from '@mui/material';
import CameraAltRoundedIcon from '@mui/icons-material/CameraAltRounded';

const AvatarImage = (props) => {
  const { src, alt } = props;

  return (
    <Box pt={{ sm: 4 }}>
      <Avatar alt={alt} sx={{ width: 200, height: 200 }} src={src} />
      <IconButton style={{ top: '-50px', right: '-20px', background: 'white' }}>
        <CameraAltRoundedIcon style={{ fontSize: '24px' }} />
      </IconButton>
    </Box>
  );
};

export default AvatarImage;
