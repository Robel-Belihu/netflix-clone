import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./Nav.css";

function Nav() {

    const [show, handleShow] = useState(false);
    const navigate = useNavigate();

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => {
            window.removeEventListener("scroll", transitionNavBar);
        }
    }, [])


    return (
        <div className={`nav ${show && "nav__black"}`} >
            <div className='nav__contents'>
                <img
                    onClick={() => navigate("/")}
                    className="nav__logo"
                    src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"
                    alt=""
                />
                <img
                    onClick={() => navigate("/profile")}
                    className="nav__avatar"
                    src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
                    alt=""
                />
            </div>
        </div >
    )
}

export default Nav