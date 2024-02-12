import React from 'react'
import "./css/navbar.css"

export default function navbar() {
    const menuPop = () => {
        document.getElementById('circularMenu').classList.toggle('active')
    }
    return (
        <div>
            <div id="circularMenu" className="circular-menu">

                <a className="floating-btn" onClick={menuPop}>
                    <i className="fa fa-plus"></i>
                </a>

                <menu className="items-wrapper">
                    <a href="#about&home" className="menu-item fa fa-home"></a>
                    <a href="#resume" className="menu-item fa fa-user"></a>
                    <a href="#" class="menu-item fa fa-code"></a>
                    <a href="#" className="menu-item fa fa-envelope"></a>
                </menu>

            </div>
        </div>
    );
}
