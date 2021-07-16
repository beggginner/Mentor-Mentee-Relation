import React, { useState } from "react";

import { NavLink } from "react-router-dom";

import { MenuAdmin } from "./MenuAdmin";

import "./Navbar.css";



const NavAdmin = () => {

    const [clicked, setClicked] = useState(false);

    const menuAdmin = MenuAdmin.map(({ url, title }, index) => {

        return (

            <li key={index}>

                <NavLink exact to={url} activeClassName="active">

                    {title}

                </NavLink>

            </li>

        );

    });



    const handleClick = () => {

        setClicked(!clicked);

    };



    return (

        <nav>

            <div className="logo">

                CLAY<font>LAB</font>

            </div>

            <div className="menu-icon" onClick={handleClick}>

                <i className={clicked ? "fas fa-times" : "fas fa-bars"}>=</i>

            </div>

            <ul className={clicked ? "menu-list" : "menu-list close"}>{menuAdmin}</ul>

        </nav>

    );

};



export default NavAdmin;