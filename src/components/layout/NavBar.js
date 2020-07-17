import React from 'react';

const NavBar = () =>{
  return(
    <header className="app-header">
      <p className="nombre-usuario">Hi there <span>Name</span></p>
      <nav className="nav-principal">
        <a href="#!">Log out</a>
      </nav>
    </header>
  );
}

export default NavBar;
