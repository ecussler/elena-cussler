import React from 'react';


const styles = {
    navBarStyle: {
        justifyContent: 'flex-end', 
    }, 
}; 

function NavBar() {
    return (
        <nav style={styles.navBarStyle} className='nav-bar'>
            <a href="/">About Me</a>
            <a href="/">Portfolio</a>
            <a href="/">Contact Me</a>
            <a href="/">Resume</a>
        </nav>
    );
}; 

export default NavBar; 