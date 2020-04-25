import React, {Fragment} from 'react';

const Footer = () => {
    const d = new Date();
    const year = d.getFullYear();
    return(
        <Fragment>
        <footer>
        <p>&copy; Insanely Elegant {year}</p>
        </footer>
        </Fragment>
    );
    
};

export default Footer;