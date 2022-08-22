import * as Ioicon from "react-icons/io5";

export let styles = {
    iconCont : {
        width: '100%', 
        height: '100%', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    iconPic : {
        width: '25px', 
        height: '25px',
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
        icon:<Ioicon.IoHome/>
    },
    {
        name:'map',
        title: 'Thai Map',
        path:'/map',
        icon:<Ioicon.IoHome/>
    },
    {
        name:'wwmap',
        title: 'World Wide Map',
        path:'/wwmap',
        icon:<Ioicon.IoHome/>
    },
    {
        name:'about',
        title: 'About Us',
        path:'/about',
        icon:<Ioicon.IoHome/>
    }
]