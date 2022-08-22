import * as Ioicon from "react-icons/io5";
import * as Ioicon4 from "react-icons/io";
import * as Biicon from "react-icons/bi";
import * as Faicon from "react-icons/fa";


export let styles = {
    iconCont : {
        width: '100%', 
        height: '100%', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    iconPic : {
        size:"1.5em",
        color:'#fff',

    },

}

export const navData = [
    {
        name:'home',
        title: 'Home',
        path:'/',
        icon:<Ioicon.IoHome/>
    },
    {
        name:'inform',
        title: 'Information',
        path:'/information',
        icon:<Ioicon.IoBarChartSharp/>
    },
    {
        name:'map',
        title: 'Thai Map',
        path:'/map',
        icon:<Faicon.FaMapMarkedAlt/>
    },
    {
        name:'wwmap',
        title: 'World Wide Map',
        path:'/wwmap',
        icon:<Biicon.BiWorld/>
    },
    {
        name:'about',
        title: 'About Us',
        path:'/about',
        icon:<Ioicon4.IoMdContact/>
    }
]