import React from 'react'
import "./css/navbar.css"

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
                    <i  className="menu-item fa fa-user"></i>
                    <i  className="menu-item fa fa-code"></i>
                    <i  className="menu-item fa fa-envelope"></i>
                </menu>

            </div>
        </div>
    );
}
