// App.js
import * as React from "react";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "../routes/Home"
import Map from "../routes/Map"
import Inform from "../routes/Inform"
import WWMap from "../routes/WWMap"
import About from "../routes/About"
import { navData, styles } from "./Navigator.js"
import { IconContext } from "react-icons";



function Navigator() {

    const history = useNavigate();


    return (
        <div>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="map" element={<Map />} />
                <Route path="inform" element={<Inform />} />
                <Route path="wwmap" element={<WWMap />} />
                <Route path="about" element={<About />} />
            </Routes>
            <SideNav
                onSelect={(selected) => {
                    history(`/` + `${selected}`)
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">

                    {navData.map((item, index) => {
                        return (
                            <NavItem eventKey={item.name}>
                                <NavIcon>
                                    <div style={styles.iconCont}>
                                        <IconContext.Provider value={styles.iconPic}>
                                            {item.icon}
                                        </IconContext.Provider>
                                    </div>
                                </NavIcon>
                                <NavText>
                                    {item.title}
                                </NavText>
                            </NavItem>
                        )
                    })}

                </SideNav.Nav>
            </SideNav>
        </div>
    );


}


export default Navigator;
