import { Container, Grid, Divider } from '@mui/material';
import { Box } from '@mui/system';
import { programmingLanguages } from '../../data/programming-languages.js';
import { useHistory } from 'react-router';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useState, useEffect } from 'react';
import { auth } from '../../services/firebase';
import Loading from '../../pages/Loading';

import useStars from '../../hooks/use-stars.js';
import StarRatingField from '../ui/star-rating/StarRatingField.js';
import Creatable from 'react-select/creatable';
import SuccessSnackbar from './SuccessSnackbar';
import { getEmployeeSkillInfo, postEmployeeSkillInfo } from '../../services/firestore-queries.js';

const SkillsInfo = () => {
  const history = useHistory();
  const [user, loading, error] = useAuthState(auth);
  const [skillData, setSkillData] = useState({});
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (error) alert(error);
    if (loading) return <Loading />;
    if (!user) history.replace('/login');
    if (user) getEmployeeSkillInfo(user.uid, setSkillData);
  }, [user, loading, error, history]);

  const { rating: arcGISRating, ratingChangeHandler: arcGISRatingChangeHandler } = useStars(
    'Arc-GIS experience level',
    skillData.arcGISRating?.value
  );
  const { rating: enviRating, ratingChangeHandler: enviRatingChangeHandler } = useStars(
    'ENVI experience level',
    skillData.enviRating?.value
  );
  const { rating: snapRating, ratingChangeHandler: snapRatingChangeHandler } = useStars(
    'SNAP experience level',
    skillData.snapRating?.value
  );

  const {
    rating: progLang1Rating,
    ratingChangeHandler: progLang1RatingChangeHandler,
    labelChangeHandler: progLang1LabelChangeHandler,
    labelHasError: progLang1LabelHasError,
  } = useStars(skillData.progLang1Rating?.label, skillData.progLang1Rating?.value);
  const {
    rating: progLang2Rating,
    ratingChangeHandler: progLang2RatingChangeHandler,
    labelChangeHandler: progLang2LabelChangeHandler,
    labelHasError: progLang2LabelHasError,
  } = useStars(skillData.progLang2Rating?.label, skillData.progLang2Rating?.value);
  const {
    rating: progLang3Rating,
    ratingChangeHandler: progLang3RatingChangeHandler,
    labelChangeHandler: progLang3LabelChangeHandler,
    labelHasError: progLang3LabelHasError,
  } = useStars(skillData.progLang3Rating?.label, skillData.progLang3Rating?.value);
  const {
    rating: progLang4Rating,
    ratingChangeHandler: progLang4RatingChangeHandler,
    labelChangeHandler: progLang4LabelChangeHandler,
    labelHasError: progLang4LabelHasError,
  } = useStars(skillData.progLang4Rating?.label, skillData.progLang4Rating?.value);
  const {
    rating: progLang5Rating,
    ratingChangeHandler: progLang5RatingChangeHandler,
    labelChangeHandler: progLang5LabelChangeHandler,
    labelHasError: progLang5LabelHasError,
  } = useStars(skillData.progLang5Rating?.label, skillData.progLang5Rating?.value);

  const formIsValid =
    !progLang1LabelHasError &&
    !progLang2LabelHasError &&
    !progLang3LabelHasError &&
    !progLang4LabelHasError &&
    !progLang5LabelHasError;

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) return;

    const formData = {
      arcGISRating: arcGISRating,
      enviRating: enviRating,
      snapRating: snapRating,
      progLang1Rating: progLang1Rating,
      progLang2Rating: progLang2Rating,
      progLang3Rating: progLang3Rating,
      progLang4Rating: progLang4Rating,
      progLang5Rating: progLang5Rating,
    };
    postEmployeeSkillInfo(user.uid, formData);
    setOpen(true);
  };

  return (
    <Container sx={{ py: 4 }}>
      <h2>Your skills information.</h2>
      <p>This section has all the information related to your skills. You can update them as and when necessary.</p>
      <Box sx={{ pb: 4 }} />

      <form onSubmit={formSubmitHandler}>
        <Grid container sx={{ py: 1 }}>
          <Grid item xs={5}>
            <p>Arc-GIS experience level</p>
          </Grid>
          <StarRatingField rating={arcGISRating.value} ratingChangeHandler={arcGISRatingChangeHandler} />
        </Grid>

        <Grid container sx={{ py: 1 }}>
          <Grid item xs={5}>
            <p>ENVI experience level</p>
          </Grid>
          <StarRatingField rating={enviRating.value} ratingChangeHandler={enviRatingChangeHandler} />
        </Grid>

        <Grid container sx={{ py: 1 }}>
          <Grid item xs={5}>
            <p>SNAP experience level</p>
          </Grid>
          <StarRatingField rating={snapRating.value} ratingChangeHandler={snapRatingChangeHandler} />
        </Grid>

        <h4 style={{ padding: '16px 0 8px 0' }}>Select 5 programming skills</h4>
        <Divider light sx={{ mb: 2 }} />

        <Grid container sx={{ py: 1 }}>
          <Grid item xs={5}>
            <Creatable
              value={progLang1Rating}
              options={programmingLanguages}
              placeholder="Select language"
              onChange={(opt, meta) => progLang1LabelChangeHandler(opt.label)}
            />
          </Grid>
          {!progLang1LabelHasError && (
            <StarRatingField rating={progLang1Rating.value} ratingChangeHandler={progLang1RatingChangeHandler} />
          )}
        </Grid>

        <Grid container sx={{ py: 1 }}>
          <Grid item xs={5}>
            <Creatable
              value={progLang2Rating}
              options={programmingLanguages}
              placeholder="Select language"
              onChange={(opt, meta) => progLang2LabelChangeHandler(opt.label)}
            />
          </Grid>
          {!progLang2LabelHasError && (
            <StarRatingField rating={progLang2Rating.value} ratingChangeHandler={progLang2RatingChangeHandler} />
          )}
        </Grid>

        <Grid container sx={{ py: 1 }}>
          <Grid item xs={5}>
            <Creatable
              value={progLang3Rating}
              options={programmingLanguages}
              placeholder="Select language"
              onChange={(opt, meta) => progLang3LabelChangeHandler(opt.label)}
            />
          </Grid>
          {!progLang3LabelHasError && (
            <StarRatingField rating={progLang3Rating.value} ratingChangeHandler={progLang3RatingChangeHandler} />
          )}
        </Grid>

        <Grid container sx={{ py: 1 }}>
          <Grid item xs={5}>
            <Creatable
              value={progLang4Rating}
              options={programmingLanguages}
              placeholder="Select language"
              onChange={(opt, meta) => progLang4LabelChangeHandler(opt.label)}
            />
          </Grid>
          {!progLang4LabelHasError && (
            <StarRatingField rating={progLang4Rating.value} ratingChangeHandler={progLang4RatingChangeHandler} />
          )}
        </Grid>

        <Grid container sx={{ py: 1 }}>
          <Grid item xs={5}>
            <Creatable
              value={progLang5Rating}
              options={programmingLanguages}
              placeholder="Select language"
              onChange={(opt, meta) => progLang5LabelChangeHandler(opt.label)}
            />
          </Grid>
          {!progLang5LabelHasError && (
            <StarRatingField rating={progLang5Rating.value} ratingChangeHandler={progLang5RatingChangeHandler} />
          )}
        </Grid>
        <Grid container sx={{ py: 4 }}>
          <Grid item xs={12} sm={4}>
            <button className="form-button" type="submit" disabled={!formIsValid}>
              Update Skill Information
            </button>
          </Grid>
        </Grid>
      </form>
      <SuccessSnackbar open={open} setOpen={setOpen} />
    </Container>
  );
};

export default SkillsInfo;
