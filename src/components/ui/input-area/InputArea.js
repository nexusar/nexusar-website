import { Box } from '@mui/system';
import classes from './InputArea.module.css';

const InputArea = (props) => {
  const { label, type, valueChangeHandler, inputBlurHandler, hasError, value, placeholder } = props;

  const inputFieldClass = hasError ? `${classes.inputField} ${classes.inputError}` : classes.inputField;
  const id = label.split(' ').join('-');

  return (
    <Box pr={{ sm: 6 }} py={1} sx={{ display: 'grid' }}>
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        className={inputFieldClass}
        placeholder={placeholder}
        type={type}
        onChange={valueChangeHandler}
        onBlur={inputBlurHandler}
        value={value}
        rows={6}
      ></textarea>
      {hasError && (
        <small className={classes.errorInfo}>
          <i className="fa fa-info-circle" style={{ marginRight: '8px' }}></i>Please enter a valid {label.toLowerCase()}
        </small>
      )}
    </Box>
  );
};

export default InputArea;
