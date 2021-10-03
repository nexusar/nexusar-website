import { useState, useEffect } from 'react';

const isNotEmpty = (value) => value.trim() !== '';

const useStars = (initLabel, initValue) => {
  const [rating, setRating] = useState({ label: '', value: 0 });

  useEffect(() => {
    if (initLabel && initValue) setRating({ label: initLabel, value: initValue });
  }, [initLabel, initValue]);

  const labelIsValid = isNotEmpty(rating.label);
  const labelHasError = !labelIsValid;

  const labelChangeHandler = (newLabel) => {
    const newRating = { label: newLabel, value: rating.value };
    setRating(newRating);
  };

  const ratingChangeHandler = (newValue) => {
    const newRating = { label: rating.label, value: newValue };
    setRating(newRating);
  };

  return {
    rating,
    ratingChangeHandler,
    labelChangeHandler,
    labelHasError,
  };
};

export default useStars;
