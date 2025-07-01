import React from "react";
import "../components/styles/Main.css"

import { Outlet, Link } from "react-router-dom";

const Main = () => {
    return (
        <>
            <ul>
                <li><Link to="/" className="active">Home</Link></li>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            <Outlet />
        </>
    )
}

export default Main;