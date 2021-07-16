import React from "react";

function Header() {
    return (
        <nav>
            <NavLink exact activeClassName="active" to="/">
                Home
            </NavLink>
            <NavLink activeClassName="active" to="/users">
                Users
            </NavLink>
            <NavLink activeClassName="active" to="/contact">
                Contact
            </NavLink>
        </nav>
    );
}

export default Header;