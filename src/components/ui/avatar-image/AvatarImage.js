import { Box } from '@mui/system';
import { Avatar, IconButton } from '@mui/material';
import CameraAltRoundedIcon from '@mui/icons-material/CameraAltRounded';
import classes from './AvatarImage.module.css';
import { useEffect, useState } from 'react';
import { uploadFileToStorage } from '../../../services/firestore-queries';
import IOSSpinner from '../ios-spinner/IOSSpinner';
import SuccessSnackbar from '../../Dashboard/SuccessSnackbar';

const AvatarImage = (props) => {
  const { src, alt, folderName, setImageSrc, collectionName } = props;
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [open, setOpen] = useState(false);

  const clickHandler = () => {
    document.getElementsByClassName(classes.inputFile)[0].click();
  };

  const onImageChange = (event) => {
    const reader = new FileReader();
    const file = event.target.files[0];

    if (file) {
      reader.onload = () => {
        if (reader.readyState === 2) setImage(file);
      };
      reader.readAsDataURL(event.target.files[0]);
    } else setImage(null);
  };

  useEffect(() => {
    if (image && folderName)
      uploadFileToStorage(
        'profilePictureValue',
        image,
        'profile',
        folderName,
        setUploading,
        setImageSrc,
        collectionName,
        setOpen
      );
  }, [image, folderName, setImageSrc, collectionName]);

  return (
    <Box pt={{ sm: 4 }}>
      <Box>
        <Avatar alt={alt} sx={{ width: 200, height: 200, opacity: uploading ? 0.25 : 1 }} src={src} />
        {uploading && (
          <Box sx={{ position: 'relative', top: -120 }}>
            <IOSSpinner />
          </Box>
        )}
      </Box>
      {!uploading && (
        <IconButton style={{ top: '-50px', right: '-20px', background: 'white' }} onClick={clickHandler}>
          <CameraAltRoundedIcon style={{ fontSize: '24px' }} />
          <input
            type="file"
            className={classes.inputFile}
            accept="image/*"
            onChange={(e) => {
              onImageChange(e);
            }}
          />
        </IconButton>
      )}
      <SuccessSnackbar open={open} setOpen={setOpen} info="Image updated succesfully." />
    </Box>
  );
};

export default AvatarImage;
