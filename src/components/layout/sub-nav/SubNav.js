import { useState } from 'react';
import { Container } from '@mui/material';
import SubNavItem from './SubNavItem';

const SubNav = () => {
  const navItems = [
    { name: 'Personal', icon: 'user', selected: false },
    { name: 'Academic', icon: 'graduation-cap', selected: false },
    { name: 'Work', icon: 'briefcase', selected: false },
    { name: 'Skills', icon: 'laptop', selected: false },
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
    <div style={{ backgroundColor: '#f8f8f8' }}>
      <Container
        sx={{
          padding: '32px 0px',
          display: 'flex',
          overflowX: 'auto',
        }}
      >
        {selectedNavItem.map((item, index) => (
          <SubNavItem
            key={index}
            itemId={index}
            icon={item.icon}
            name={item.name}
            selected={item.selected}
            onSelect={selectHandler}
          />
        ))}
      </Container>
    </div>
  );
};

export default SubNav;
