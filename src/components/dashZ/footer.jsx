import React from 'react';
import {Link} from 'react-router-dom';  

const Footer = () => {
    return ( 
        <footer className="footer footerDash">
            <div className="container">
              <nav className="float-left">
                <ul>
                  <li>
                    <Link to="#">About Us</Link>
                  </li>
                  <li>
                    <Link to="#">Licenses</Link>
                  </li>
                </ul>
              </nav>
              <div className="copyright float-right">
                &copy;
                <script>document.write(new Date().getFullYear())</script>, made
                with <i className="material-icons">favorite</i> by
                  {/* eslint-disable-next-line react/jsx-no-target-blank */}
                <a href="https://linspark.com" target="_blank">
                  {" "}
                  Linspark Team
                </a>
              </div>
            </div>
          </footer>
      
     );
}
 
export default Footer;