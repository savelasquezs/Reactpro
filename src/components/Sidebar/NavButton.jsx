function NavButton({ title, icon }) {
  return (
    <div>
      {icon && <div>{icon}</div>}
      <div>{title}</div>
    </div>
  );
}

export default NavButton;