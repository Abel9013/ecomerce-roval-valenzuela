import React from 'react';
import CartWidget from './CartWidget';

const navbar = () => {
  return (
    <>
      {console.log(CartWidget)}
      <header className="bg-header">
        <div className="bg-navbar">
            
            <div className="container">
                    <div className="navbar">
                        <a href="##" className="navbar-brand">
                            <CartWidget />
                            RoVal 
                            
                        </a>    
                        <nav className="navbar-nav">
                            <a href="##" className="nav-link"> Inicio </a>
                            <a href="##" className="nav-link"> Productos </a>
                            <a href="##" className="nav-link"> Nosotros </a>
                            <a href="##" className="nav-link"> Contacto </a>
                        </nav>
                    </div>
            </div>

        </div>
    </header>
    </>
  )
}

export default navbar