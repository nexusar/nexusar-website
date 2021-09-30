import { Container } from '@mui/material';
import { Link } from 'react-router-dom';
import classes from './LoginButton.module.css';

const LoginButton = (props) => {
  const { name, logo, loginHandler } = props;

  let buttonClass = `${classes.loginButton} ${classes.loginButtonLight}`;
  if (name === 'Apple') buttonClass = `${classes.loginButton} ${classes.loginButtonDark}`;

  return (
    <Container sx={{ py: 1 }}>
      <Link to={'#'} className={buttonClass} onClick={loginHandler}>
        <img src={logo} height="24px" width="24px" alt={`${name.toLowerCase()}-logo`} />
        <p style={{ paddingLeft: '15px' }}>Continue with {name}</p>
      </Link>
    </Container>
  );
};

export default LoginButton;
