import React from 'react'
import { NavLink } from 'react-router-dom';
import sidebar from '../Sidebar.module.scss'

export const Navbar = () => {
    return (
        <div className={sidebar.navbar}>
            <NavLink to="./productChange" activeClassName={sidebar.active}><i className="icon-nav-user"></i>My account</NavLink>
            <NavLink to="" activeClassName="active"><i className="icon-nav-star"></i>My Reviews</NavLink>
            <NavLink to="" activeClassName="active"><i className="icon-nav-shopping-bag"></i>Purchase history</NavLink>
            <NavLink to="" activeClassName="active"><i className="icon-nav-percentage"></i>My discounts</NavLink>
            <NavLink to="" activeClassName="active"><i className="icon-nav-heart"></i>My Favorites</NavLink>
        </div>
    )
}

export default Navbar;