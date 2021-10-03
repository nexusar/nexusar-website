import { useState, useEffect } from 'react';

const useInput = (validateValue, initValue) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  useEffect(() => {
    if (initValue) setEnteredValue(initValue);
  }, [initValue]);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
