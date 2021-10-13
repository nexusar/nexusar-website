import { Fragment } from 'react';
import { Container } from '@mui/material';
import RecentUpdates from '../../components/layout/recent-updates/RecentUpdates';
import SubNav from '../../components/layout/sub-nav/SubNav';

const navItems = [
  { name: 'Water Resource Management', icon: 'hand-holding-water' },
  { name: 'Ground Subsidience', icon: 'mountain' },
  { name: 'Highway Construction', icon: 'road' },
  { name: 'Defense Applications', icon: 'fighter-jet' },
  { name: 'Rural and Urban development', icon: 'city' },
  { name: 'Agriculture Industry', icon: 'tractor' },
  { name: 'Disaster Management', icon: 'house-damage' },
  { name: 'Flood Mapping', icon: 'water' },
  { name: 'Oil and Gas', icon: 'oil-can' },
  { name: 'Mining', icon: 'coins' },
];

const Solutions = () => {
  return (
    <Fragment>
      <RecentUpdates />
      <SubNav pathname={'/solutions'} navItems={navItems} />

      <Container sx={{ py: 5, textAlign: 'center' }}>
        <Container sx={{ py: 4, display: 'flex', justifyContent: 'center' }}>
          <img
            src="https://www.apple.com/v/mac/home/bi/images/overview/compare/compare_imac27__ftc2wevwltym_large_2x.png"
            alt="imac"
            style={{ width: 'inherit', maxWidth: 'fit-content' }}
          />
        </Container>

        <h1>This is the Solutions page</h1>

        <p>
          Safari has innovative features that let you enjoy more of the web. In even more ways. Built-in privacy
          features help protect your information and keep your Mac secure. An updated start page helps you easily and
          quickly save, find and share your favourite sites. And Siri suggestions surface bookmarks, links from your
          reading list, iCloud Tabs, links you receive in Messages and more.
        </p>
      </Container>
    </Fragment>
  );
};

export default Solutions;
