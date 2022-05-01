import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import "./AppBar.css"
import logo from "../assets/images/Logo_white.jpg"
import { Link } from 'react-router-dom';

function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

const options = [
    {
        name: "Home",
        link: "/"
    },
    {
        name: "Services",
        link: "/services"
    },
    {
        name: "Blog",
        link: "/blog"
    }
]

export default function HideAppBar(props) {
    return (
        <React.Fragment>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar elevation={0} style={{ color: "inherit", fontFamily: "inherit" }}  >
                    <div className='app-bar' >
                        <div className='logo-ctn' >
                            <div className='wrap' >
                                <img alt="logo" width="100px" src={logo} />
                            </div>
                            <div className='wrap' >
                                gigsman
                            </div>
                        </div>
                        <div style={{ width: "50%", display: "flex", justifyContent: "space-between", alignItems: "center", height: "100%" }} >
                            <div className='logo-ctn options' >
                                {
                                    options.map((item, index) => {
                                        return (
                                            <Link to={item.link} key={index} className="wrap" >
                                                <div className="option-item">
                                                    {item.name}
                                                </div>
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                            <div style={{display:"flex"}} >
                                <div className='wrap option-item' >
                                    +91 9999 9999
                                </div>
                                <div style={{ padding: "0px 0px", paddingRight: "20px" }} className="wrap" >
                                    <button className='std-btn' >
                                        Have a project?
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </AppBar>
            </HideOnScroll>
        </React.Fragment>
    );
}
