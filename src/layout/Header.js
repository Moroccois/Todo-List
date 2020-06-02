import React from 'react';

function Header() {
    return(
        <header style={headerStyle} className="header-title">
          <h3> React Todo List </h3>
        </header>
    );
}

const headerStyle = {
    fontFamily: 'Montserrat', 
    fontWeight: '550',
    padding: '1em'
}

export default Header; 