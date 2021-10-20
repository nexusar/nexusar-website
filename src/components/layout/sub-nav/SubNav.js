import SubNavItem from './SubNavItem';

const SubNav = (props) => {
  const { navItems, pathname } = props;

  return (
    <div style={{ backgroundColor: '#f8f8f8' }}>
      <div
        style={{
          padding: '24px 0px',
          display: 'flex',
          overflowX: 'auto',
        }}
      >
        {navItems.map((item, index) => {
          const itemId = item.name.toLowerCase().split(' ').join('-');
          return <SubNavItem key={index} itemId={itemId} icon={item.icon} name={item.name} pathname={pathname} />;
        })}
      </div>
    </div>
  );
};

export default SubNav;
