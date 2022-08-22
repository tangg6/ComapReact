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
import { styles } from "./Navigator.js"



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

                    <NavItem eventKey="home">
                        <NavIcon>
                            <div style={styles.iconCont}>
                                <img src={require("../asset/home.png")} style={styles.iconPic} />
                            </div>
                        </NavIcon>
                        <NavText>
                            Home
                        </NavText>
                    </NavItem>

                    <NavItem eventKey="inform">
                        <NavIcon>
                            <div style={styles.iconCont}>
                                <img src={require("../asset/inform.png")} style={styles.iconPic} />
                            </div>
                        </NavIcon>
                        <NavText>
                            Information
                        </NavText>
                    </NavItem>

                    <NavItem eventKey="map">
                        <NavIcon>
                            <div style={styles.iconCont}>
                                <img src={require("../asset/map.png")} style={styles.iconPic} />
                            </div>
                        </NavIcon>
                        <NavText>
                            Thai Map
                        </NavText>
                    </NavItem>

                    <NavItem eventKey="wwmap">
                        <NavIcon>
                            <div style={styles.iconCont}>
                                <img src={require("../asset/acc.png")} style={styles.iconPic} />
                            </div>
                        </NavIcon>
                        <NavText>
                            World Wide Map
                        </NavText>
                    </NavItem>

                    <NavItem eventKey="about">
                        <NavIcon>
                            <div style={styles.iconCont}>
                                <img src={require("../asset/setting.png")} style={styles.iconPic} />
                            </div>
                        </NavIcon>
                        <NavText>
                            About
                        </NavText>
                    </NavItem>

                </SideNav.Nav>
            </SideNav>
        </div>
    );

    
}


export default Navigator;
