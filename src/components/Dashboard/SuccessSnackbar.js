import { Snackbar, Alert } from '@mui/material';
import { CheckCircleOutlined } from '@mui/icons-material';

const SuccessSnackbar = (props) => {
  const { open, setOpen, info } = props;

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={open}
      autoHideDuration={2000}
      onClose={handleClose}
      style={{ marginTop: '20px', width: '100%' }}
    >
      <Alert
        icon={<CheckCircleOutlined fontSize="inherit" style={{ color: 'white' }} />}
        style={{ fontSize: '17px', fontFamily: 'SF Pro Text Regular', backgroundColor: '#000000cc', color: 'white' }}
      >
        {info ? info : 'The data has been saved successfully!'}
      </Alert>
    </Snackbar>
  );
};

export default SuccessSnackbar;
