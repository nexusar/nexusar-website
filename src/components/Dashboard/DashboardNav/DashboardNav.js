import { Container } from '@mui/material';
import { useState } from 'react';
import classes from './DashboardNav.module.css';
import DashboardNavItem from './DashboardNavItem';
import PersonalInfo from '../PersonalInfo';
import SkillsInfo from '../SkillsInfo';
import WorkInfo from '../WorkInfo';
import AcademicInfo from '../AcademicInfo';
import BankInfo from '../BankInfo';
import SalaryInfo from '../SalaryInfo';
import AttendanceInfo from '../AttendanceInfo';

const DashboardNav = (props) => {
  const { onSelect } = props;
  const navItems = [
    { name: 'Personal', icon: 'user', selected: false, component: <PersonalInfo /> },
    { name: 'Academic', icon: 'graduation-cap', selected: false, component: <AcademicInfo /> },
    { name: 'Work', icon: 'briefcase', selected: false, component: <WorkInfo /> },
    { name: 'Skills', icon: 'laptop', selected: false, component: <SkillsInfo /> },
    { name: 'Bank', icon: 'university', selected: false, component: <BankInfo /> },
    { name: 'Salary', icon: 'money-check-alt', selected: false, component: <SalaryInfo /> },
    { name: 'Attendance', icon: 'id-badge', selected: false, component: <AttendanceInfo /> },
  ];
  const [selectedNavItem, setSelectedNavItem] = useState(navItems);

  const selectHandler = (itemId) => {
    const updatedNavItems = [...navItems];
    updatedNavItems[itemId].selected = true;
    setSelectedNavItem(updatedNavItems);

    // Pass the component data to the parent
    onSelect(updatedNavItems[itemId].component);
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
