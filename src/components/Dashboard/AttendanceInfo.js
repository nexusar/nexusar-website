import { Container } from '@mui/material';
import { Box } from '@mui/system';

const AttendanceInfo = () => {
  return (
    <Container sx={{ py: 4 }}>
      <h2>Your attendance information.</h2>
      <p>This section keeps a track of your attendance. Make sure that your attendance is recorded everyday.</p>
      <Box sx={{ pb: 4 }} />
    </Container>
  );
};

export default AttendanceInfo;
