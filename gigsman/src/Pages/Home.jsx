import React, { Component } from 'react';
import HideAppBar from '../Components/AppBar';
import home1 from "../assets/images/home1.png"
import "./Home.css"
import { theme } from '../App';
import icon1 from "../assets/images/icon1.png";
import icon2 from "../assets/images/icon2.png";
import icon3 from "../assets/images/icon3.png";
import icon4 from "../assets/images/icon4.png";
import home2 from "../assets/images/home2.png";
import home3 from "../assets/images/home3.png";
import home4 from "../assets/images/home4.png";
import BasicTabs from '../Components/Home/Tabs';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';

const services = [
    {
        name: "UI/UX Design",
        icon: icon1,
        desc: "Leave the development of your bussiness ideas on us and enjoy it's growth"
    },
    {
        name: "App Development",
        icon: icon2,
        desc: "Leave the development of your bussiness ideas on us and enjoy it's growth"
    },
    {
        name: "Web Development",
        icon: icon3,
        desc: "Leave the development of your bussiness ideas on us and enjoy it's growth"
    },
    {
        name: "SEO Services",
        icon: icon4,
        desc: "Leave the development of your bussiness ideas on us and enjoy it's growth"
    }
]

class Home extends Component {
    render() {
        return (
            <div>
                <HideAppBar />
                <div className='wrap' >
                    <div className='page-layout' >
                        <div className='welcome' >
                            <div>
                                <div className='welcome-text' >
                                    WELCOME TO GIGSMAN
                                </div>
                                <div className='grow-text' >
                                    Grow Your Bussiness <br />
                                    with <b style={{ color: theme.palette.primary.main }} >Our Solution</b>
                                </div>
                                <div>
                                    We Provide all the services you need to<br></br>
                                    boost your bussiness up to a level.
                                </div>
                                <div>
                                    <button className='std-btn-2' style={{
                                        marginTop: "20px"
                                    }} >
                                        Our Services
                                    </button>
                                </div>
                            </div>
                            <div className='wrap' >
                                <img src={home1} width="600px" alt="bg" />
                            </div>
                        </div>

                        <div>
                            <div className='heading' >
                                Our Provided <b>Services</b>
                            </div>
                            <div className='services' >
                                {
                                    services.map((item, index) => {
                                        return (
                                            <div key={index} className='service-card' >
                                                <div className='wrap item-icon' >
                                                    <img width="50px" src={item.icon} alt="icon" ></img>
                                                </div>
                                                <div className='item-name' >
                                                    {item.name}
                                                </div>
                                                <div className='item-desc' >
                                                    {item.desc}
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div>
                            <div className='heading' >
                                Our Latest <b>Projects</b>
                            </div>
                            <div className='services' >
                                <BasicTabs />
                            </div>
                            <div className='wrap' >
                                <button className='std-btn-2' >
                                    View All Projects
                                </button>
                            </div>
                        </div>

                        <div className='home-flex' >
                            <div>
                                <div className='heading' style={{ textAlign: "left" }} >
                                    Why you should <br />
                                    Choose <b>Gigsman</b>
                                </div>
                                <p style={{ color: "width", fontSize: '18px' }} >
                                    As a full service Design/Dev agency, we work closely with our clients to define,
                                    design and develop transformative user experiences across all platforms and brand's touchpoints.
                                </p>
                                <div>
                                    <button className='std-btn' >
                                        More About Us
                                    </button>
                                </div>
                            </div>
                            <div className='wrap' >
                                <img width="80%" alt="home2" src={home2} />
                            </div>
                        </div>


                        <div className='home-flex' >
                            <div className='wrap' >
                                <img width="80%" alt="home2" src={home3} />
                            </div>
                            <div>
                                <div className='heading' style={{ textAlign: "left" }} >
                                    Hear from <b>Our Clients</b>
                                </div>
                                <p style={{ color: "width", fontSize: '18px' }} >
                                    Our website has transformed from a 'tractor' to a 'spaceship'. We are super thrilled about our new website.
                                </p>
                                <div>
                                    <button className='std-btn' >
                                        More About Us
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className='home-flex' >
                            <div>
                                <div className='heading' style={{ textAlign: "left" }} >
                                    Don't Hesitate to <br />
                                    <b>Contact Us</b>
                                </div>
                                <p style={{ color: "width", fontSize: '18px' }} >
                                    As a full service Design/Dev agency, we work closely with our clients to define,
                                    design and develop transformative user experiences across all platforms and brand's touchpoints.
                                </p>
                                <div>
                                    <button className='std-btn' >
                                        More About Us
                                    </button>
                                </div>
                            </div>
                            <div className='wrap' style={{ position: "relative" }} >
                                <img width="80%" alt="home2" src={home4} />
                                <div className="get-in-touch" >
                                    <form>
                                        <div className='heading' style={{ textAlign: "left", fontSize: "20px", margin: '20px 0px' }} >
                                            Get In <b>Touch</b>
                                        </div>
                                        <div>
                                            <label className='form-label' >Your Mail</label>
                                            <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom:"20px" }}>
                                                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                                <TextField id="input-with-sx" label="Email" variant="outlined" />
                                            </Box>
                                        </div>
                                        <div>
                                            <label className='form-label' >Your Message</label>
                                            <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom:"20px" }}>
                                                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                                <TextField id="input-with-sx" label="Message" variant="standard" />
                                            </Box>
                                        </div>
                                        <div className='wrap' >
                                            <button className='std-btn-2' style={{padding:"15px", width:"100%", margin:"20px 0px"}} >
                                                Send Request
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Home;