import React from 'react';
import './Nav_Menu.css';

const Nav_Menu = (props) => (
    <React.Fragment>
    <nav>
    <ul>
        <li><a onClick={() => props.registrationHandler()} className="std-registration">Registration</a></li>
        <li><a onClick={() => props.studentAdminHandler()} className="std-profile">School Admin</a></li>
        <li><a className="std-registration">Contact</a></li>
        <li><a className="std-profile">About</a></li>
    </ul>
</nav>
</React.Fragment>
);
export default Nav_Menu;