import { useEffect } from 'react';
import { Container } from '@mui/material';
import { useHistory } from 'react-router';
import signOut from '../../services/auth/sign-out';
import IOSSpinner from '../../components/ui/ios-spinner/IOSSpinner';

const NotUser = (props) => {
  const { userType } = props;
  const history = useHistory();

  // Get out of this page after signing out and with a delay of 5 seconds
  useEffect(() => {
    const identifier = setTimeout(() => {
      signOut();
    }, 5000);
    return () => {
      clearTimeout(identifier);
    };
  }, [history]);

  return (
    <Container sx={{ py: 4 }}>
      <h2>You are not an {userType} for this organisation</h2>
      <p>You will be logged out. If you think this is a mistake then please contact support.</p>
      <Container sx={{ pt: 16 }}>
        <IOSSpinner />
      </Container>
      <p className="centered">Logging you out</p>
    </Container>
  );
};

export default NotUser;
