import React from 'react';
import style from '../Footer/style.css'

const Footer = () => {
    return (
        <footer className="footer mt-auto py-3 bg-light">
            <div className="footer">
                <span className="text-muted">
                    &copy; {new Date().getFullYear()} bookmybook. @All rights reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;
