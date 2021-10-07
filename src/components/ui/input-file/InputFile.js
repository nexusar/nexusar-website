import { useState, useEffect } from 'react';
import { Box } from '@mui/system';
import { IconButton } from '@mui/material';
import BackupRoundedIcon from '@mui/icons-material/BackupRounded';
import IOSSpinner from '../ios-spinner/IOSSpinner';
import classes from './InputFile.module.css';
import { uploadFileToStorage } from '../../../services/firestore-queries';

const InputFile = (props) => {
  const { label, placeholder, folderName, value, setValue, field, collectionName } = props;

  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const clickHandler = () => {
    document.getElementById(`${id}_file`).click();
  };

  const onFileChange = (event) => {
    const reader = new FileReader();
    const file = event.target.files[0];

    if (file) {
      reader.onload = () => {
        if (reader.readyState === 2) setFile(file);
      };
      reader.readAsDataURL(event.target.files[0]);
    } else setFile(null);
  };

  useEffect(() => {
    if (file)
      uploadFileToStorage(
        field,
        file,
        `${field.toLowerCase()}`,
        folderName,
        setUploading,
        setValue,
        collectionName,
        () => {}
      );
  }, [file, field, folderName, setValue, collectionName]);

  const id = label.toLowerCase().split(' ').join('-');
  const url = value ? value : '#';

  return (
    <Box pr={{ sm: 6 }} py={1} sx={{ display: 'grid' }}>
      <label htmlFor={id}>{label}</label>
      <Box display="flex" mt={'10px'}>
        <a href={url} target="_blank" rel="noreferrer" style={{ display: 'contents' }}>
          <input
            id={id}
            type="text"
            className={classes.inputField}
            placeholder={placeholder}
            value={value ? value : ''}
            style={{ textDecoration: value ? 'underline' : 'none' }}
            readOnly
          />
        </a>
        {uploading && (
          <Box pl={2}>
            <IOSSpinner />
          </Box>
        )}
        {!uploading && (
          <IconButton className={classes.iconButton} onClick={clickHandler}>
            <BackupRoundedIcon style={{ fontSize: '32px' }} />
            <input
              type="file"
              id={`${id}_file`}
              className={classes.inputFile}
              accept="application/pdf"
              onChange={(e) => {
                onFileChange(e);
              }}
            />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};

export default InputFile;
