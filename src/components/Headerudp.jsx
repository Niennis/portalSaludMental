/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import "../../src/assets/js/app";
// import { baricon1, imguser, logo, noteicon, noteicon1, searchnormal, settingicon01, user06 } from './imagepath';
import { logo, baricon, baricon1 } from "./imagepath";

import ReserveBtn from "./ReserveBtn";

const Header = () => {
  // const [user, setUser] = useState({})

  const handlesidebar = () => {
    document.body.classList.toggle("mini-sidebar");
  };

  const handlesidebarmobilemenu = () => {
    document.body.classList.toggle("slide-nav");
    document.getElementsByTagName("html")[0].classList.toggle('menu-opened');
    document.getElementsByClassName("sidebar-overlay")[0].classList.toggle("opened");
  };


  return (
    <div className="main-wrapper">
      <div className="header" style={{ justifyContent: 'space-between', display: 'flex', alignItems: 'center' }}>
        <div className="header-left">
          <Link id="toggle_btn" to="#" onClick={handlesidebar}>
            <img src={baricon} alt="" />
          </Link>
          <Link id="mobile_btn" className="mobile_btn float-start" to="#" onClick={handlesidebarmobilemenu}>
            <img src={baricon1} alt="" />
          </Link>
          <Link to="/admin-dashboard" className="logo">
            <img src={logo} width={263} height={70} alt="" />{" "}
          </Link>
        </div>
        <ul className="nav user-menu float-end ">
          <li>
            <Link className="sailec" to="#" style={{ color: 'black', fontWeight: 500, fontSize: '14px' }}>
              TÓPICOS
            </Link>
          </li>
          <li>
            <Link className="sailec" to="#" style={{ color: 'black', fontWeight: 500, fontSize: '14px' }}>
              TEST AUTODIAGNÓSTICO
            </Link>
          </li>
          <li>
            <Link className="sailec" to="#" style={{ color: 'black', fontWeight: 500, fontSize: '14px' }}>
              EVENTOS
            </Link>
          </li>
          <li>
            <Link className="sailec" to="#" style={{ color: 'black', fontWeight: 500, fontSize: '14px' }}>
              PREGUNTAS FRECUENTES
            </Link>
          </li>
          <li>
            <ReserveBtn text={'Reservar'} bgColor={'#FF5253'} color={'#fff'} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
