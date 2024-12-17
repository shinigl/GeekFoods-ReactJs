import './Nav.css';

const Nav = () => {
  return (
    <header className="nav-header">
      <div className="logo">
        <img src="https://flowbite.com/docs/images/logo.svg" alt="logo" />
        <h2>GeekFoods</h2>
      </div>

      <ul className="nav-list">
        <li><a className="nav-link" id='first-link' href="">Home</a></li>
        <li><a className="nav-link" href="">Quote</a></li>
        <li><a className="nav-link" href="">Resturants</a></li>
        <li><a className="nav-link" href="">Foods</a></li>
        <li><a className="nav-link" href="">Contact</a></li>
      </ul>

      <button id="start-btn">Get Started</button>
    </header>
  );
};

export default Nav;
