import { Fragment } from 'react';
import { Container } from '@mui/material';
import { Box } from '@mui/system';
import RecentUpdates from '../components/layout/recent-updates/RecentUpdates';

const AboutUs = () => {
  return (
    <Fragment>
      <RecentUpdates />
      <Box
        sx={{
          backgroundSize: 'cover',
        }}
      >
        <Box
          sx={{
            mx: 'auto',
            width: 'fit-content',
          }}
        >
          <Container
            sx={{
              py: 10,
            }}
          >
            <h1>About Us</h1>
            <p>
              NexuSAR is an IIT-G, India based business endeavor aiming at serving the needs of the national and global
              markets through focused, innovative, efficient and quality services in all areas of microwave remote
              sensing and In-SAR technology and applications. Our core competency traverses through the entire domain of
              microwave remote sensing. Microwave sensors, being limitless and boundless, have established into an
              ecumenical phenomenon with its avenue only broadening every new day. We aim in providing displacement
              monitoring consultancy across diverse set of disciplines- Tectonic Deformation Measuring, Volcanic
              Settings, Ground Subsidence, Landslides, Ice Flow, Infrastructure and Building Monitoring, Agriculture
              Crop Monitoring, Disaster Management, Flood Mapping, DEM Generation, Oil and Gas Industry Monitoring, Mine
              Monitoring, Water Resource Management amongst many others. At NexuSAR, we never settle for anything less
              than providing you with speedy and reliable consultancy. Relying on the balanced team of certified
              researchers and technical experts, we are right there for you, ready to crater for any of your monitoring
              needs and requirements. We always look forward for engaging in long term partnership with clients, which
              results in mutual growth and sustainability. We are committed to ensure that our technical team is
              resourced appropriately for the ultimate benefit of our clients. It is our main goal to offer maximum
              effort, high performance, reliability and fast service by always providing high quality services at low
              prices. The clients of NexuSAR typically benefits from.
              <Container>
                <ul>
                  <li>Quality deliverance from a balanced and established team of members</li>
                  <li>Appreciable range of combined technical knowledge and experience</li>
                  <li>Strict adherence to time deadline</li> <li>Cost efficient service</li>
                  <li>Transparency</li>
                </ul>
              </Container>
              The central idea behind the formation of NexuSAR and its clinical dissemblance from other InSAR based
              companies is, apart from taking up projects, we aim to harness and promote scientific research and
              development activities across subjects and disciplines. Working at the behest of IIT minds, we understand
              and value the importance of quality research and development activities with enormity to effectuate
              paradigm shift in the betterment and improvement of society. As such, we are also available for
              collaboration with institutes and laboratories to grease the wheels of quality research.
            </p>
          </Container>
        </Box>
      </Box>
    </Fragment>
  );
};

export default AboutUs;
