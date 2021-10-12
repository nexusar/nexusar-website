import SubNavItem from './SubNavItem';

const SubNav = () => {
  const navItems = [
    { name: 'Water Resource Management', icon: 'hand-holding-water' },
    { name: 'Ground Subsidience', icon: 'mountain' },
    { name: 'Highway Construction', icon: 'road' },
    { name: 'Defense Applications', icon: 'fighter-jet' },
    { name: 'Rural and Urban development', icon: 'city' },
    { name: 'Agriculture Industry', icon: 'tractor' },
    { name: 'Disaster Management', icon: 'money-check-alt' },
    { name: 'Flood Mapping', icon: 'water' },
    { name: 'Oil and Gas', icon: 'oil-can' },
    { name: 'Mining', icon: 'id-badge' },
  ];

  return (
    <div style={{ backgroundColor: '#f8f8f8' }}>
      <div
        style={{
          padding: '32px 0px',
          display: 'flex',
          overflowX: 'auto',
        }}
      >
        {navItems.map((item, index) => {
          const itemId = item.name.toLowerCase().split(' ').join('-');
          return <SubNavItem key={index} itemId={itemId} icon={item.icon} name={item.name} />;
        })}
      </div>
    </div>
  );
};

export default SubNav;
