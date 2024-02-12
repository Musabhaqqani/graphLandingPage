import React from 'react'
import "./css/navbar.css"
import Portfolio from "../assets/MusabHaqqani_Resume.pdf"

export default function navbar() {
    const menuPop = () => {
        document.getElementById('circularMenu').classList.toggle('active')
    }
    return (
        <div>
            <div id="circularMenu" className="circular-menu">

                <i className="floating-btn" onClick={menuPop}>
                    <i className="fa fa-plus"></i>
                </i>
                <menu className="items-wrapper">
                    <i  className="menu-item fa fa-home"></i>
                    <a href= {Portfolio} target='blank' className="menu-item fa fa-user"></a>
                    <i  className="menu-item fa fa-code"></i>
                    <i  className="menu-item fa fa-envelope"></i>
                </menu>

            </div>
        </div>
    );
}
