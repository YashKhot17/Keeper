import React from 'react';

function Footer(){
    const Year = new Date();

    return (
        <footer>
            <p>Copyright © {Year.getFullYear()}</p>
        </footer>
        
    );
}

export default Footer;