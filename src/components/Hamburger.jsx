function Hamburger({ isOpen }) {
  //the 'Hamburger' function recieves the prop (isOpen) as the first argument and
  //then it gets passed from the parent (NavBar) and can be used here, so
  //the ternary operator (another syntax of an if-sentence) checks for the state of the menu,
  //and returns the icon that matches the state.
  return (
    <>
      <div className="toggle-btn">
        {isOpen ? (
          <span className="closeIcon material-symbols-outlined">close</span>
        ) : (
          <span className="menuIcon material-symbols-outlined">menu</span>
        )}
      </div>
    </>
  );
}

export default Hamburger;
