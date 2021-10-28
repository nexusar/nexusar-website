import { Fragment, useState } from 'react';
import { Container } from '@mui/material';
import RecentUpdates from '../../components/layout/recent-updates/RecentUpdates';
import SolutionsNav from '../../components/Solutions/SolutionsNav/SolutionsNav';
import SolutionsNavDrop from '../../components/Solutions/SolutionsNav/SolutionsNavDrop/SolutionsNavDrop';

const Solutions = () => {
  const [navItemsState, setNavItemsState] = useState(Array(10).fill(false));

  const navItems = [
    { name: 'Location Solutions', icon: 'map-marker-alt' },
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

  const backdropClickHandler = () => {
    setNavItemsState(Array(10).fill(false));
  };

  const selectedCategoryIndex = navItemsState.indexOf(true);
  const selectedCategoryID =
    selectedCategoryIndex !== -1 ? navItems[selectedCategoryIndex].name.toLowerCase().split(' ').join('-') : '';

  return (
    <Fragment>
      <RecentUpdates />
      <SolutionsNav navItems={navItems} selected={navItemsState} setSelected={setNavItemsState} />

      <div>
        <div style={{ position: 'absolute', width: '100%' }}>
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
              features help protect your information and keep your Mac secure. An updated start page helps you easily
              and quickly save, find and share your favourite sites. And Siri suggestions surface bookmarks, links from
              your reading list, iCloud Tabs, links you receive in Messages and more.
            </p>
          </Container>
        </div>
        {navItemsState.some((e) => e === true) && (
          <Fragment>
            <div
              style={{
                backgroundColor: 'rgb(0, 0, 0, 0.3)',
                position: 'absolute',
                width: '100%',
                top: '250px',
                bottom: '0',
              }}
              onClick={backdropClickHandler}
            ></div>
            <SolutionsNavDrop categoryID={selectedCategoryID} />
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

export default Solutions;
