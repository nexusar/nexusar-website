import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import InputField from '../ui/input-field/InputField';

const SalaryInfo = () => {
  const salary = 25000;
  const bonus = 5000;
  const salaryUpdates = [
    { date: '02/10/2021', update: 'Salary of ₹ 25000 was credited into your account' },
    { date: '01/11/2021', update: 'Salary of ₹ 25000 was credited into your account' },
    { date: '15/11/2021', update: 'Bonus of ₹ 5000 was credited into your account' },
    { date: '02/12/2021', update: 'Salary of ₹ 25000 was credited into your account' },
  ];

  return (
    <Container sx={{ py: 4 }}>
      <h2>Your salary information</h2>
      <p>This section has your salary information and updates</p>
      <Box sx={{ pb: 4 }} />

      <Grid container>
        <Grid item xs={12} sm={4}>
          <InputField label="Salary Amount (in INR)" value={`₹ ${salary}`} disabled={true} />
          <InputField label="Bonus Amount (in INR)" value={`₹ ${bonus}`} disabled={true} />
        </Grid>
        <Grid item xs={12} sm={1} />
        <Grid item xs={12} sm={7} sx={{ pt: 2 }}>
          <Grid container sx={{ backgroundColor: '#1d1d1f', color: '#f5f5f7', p: 2 }}>
            <Grid item xs={4}>
              <p>Date</p>
            </Grid>
            <Grid item xs={1} />
            <Grid item xs={7}>
              <p>Updates</p>
            </Grid>
          </Grid>
          {salaryUpdates.map((item, index) => {
            const cellColor = index % 2 ? '#f5f5f7' : '#ffffff';
            return (
              <Grid key={index} container sx={{ backgroundColor: `${cellColor}`, p: 2 }}>
                <Grid item xs={4}>
                  <p>{item.date}</p>
                </Grid>
                <Grid item xs={1} />
                <Grid item xs={7}>
                  <p>{item.update}</p>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Container>
  );
};

export default SalaryInfo;
