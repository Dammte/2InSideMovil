import './NavbarComponent.css';

const NavbarComponent = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/" className="logo">2InSideMovil</a>
      </div>
      <div className="navbar-actions">
        <button className="action-button primary" onClick={() => alert("Conócenos")}>
          Conócenos
        </button>
        <button className="action-button secondary" onClick={() => alert("Contáctanos")}>
          Contáctanos
        </button>
      </div>
    </nav>
  );
};

export default NavbarComponent;
