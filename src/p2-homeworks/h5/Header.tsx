import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import s from "./pages/Header.module.css"


function Header() {
    return (
        <div className={s.nav}>
            <NavLink className={s.link} to={PATH.PRE_JUNIOR}>PreJunior</NavLink>
            <NavLink className={s.link}  to={PATH.JUNIOR}>Junior</NavLink>
            <NavLink className={s.link} to={PATH.JUNIOR_PLUS}>Junior+</NavLink>
            <NavLink className={s.link} to={"empty"}>+</NavLink>
            {/* // add NavLinks*/}

        </div>
    )
}

export default Header
