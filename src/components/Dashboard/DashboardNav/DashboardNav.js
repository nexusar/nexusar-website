import { Container } from '@mui/material';
import { useState } from 'react';
import classes from './DashboardNav.module.css';
import DashboardNavItem from './DashboardNavItem';

const DashboardNav = () => {
  const navItems = [
    { name: 'Personal', icon: 'user', selected: false },
    { name: 'Skills', icon: 'laptop', selected: false },
    { name: 'Work', icon: 'briefcase', selected: false },
    { name: 'Academic', icon: 'graduation-cap', selected: false },
    { name: 'Bank', icon: 'university', selected: false },
    { name: 'Salary', icon: 'money-check-alt', selected: false },
    { name: 'Attendance', icon: 'id-badge', selected: false },
  ];

  const [selectedNavItem, setSelectedNavItem] = useState(navItems);

  const selectHandler = (itemId) => {
    const updatedNavItems = [...navItems];
    updatedNavItems[itemId].selected = true;
    setSelectedNavItem(updatedNavItems);
  };

  return (
    <Container className={classes.container}>
      {selectedNavItem.map((item, index) => (
        <DashboardNavItem
          key={index}
          itemId={index}
          icon={item.icon}
          name={item.name}
          selected={item.selected}
          onSelect={selectHandler}
        />
      ))}
    </Container>
  );
};

export default DashboardNav;
