import SolutionsNavItem from './SolutionsNavItem';

const SolutionsNav = (props) => {
  const { navItems, selected, setSelected } = props;

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
          return (
            <SolutionsNavItem
              key={index}
              index={index}
              icon={item.icon}
              name={item.name}
              selected={selected}
              setSelected={setSelected}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SolutionsNav;
