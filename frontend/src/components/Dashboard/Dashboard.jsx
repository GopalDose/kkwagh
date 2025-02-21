import React from 'react'
import './Dashboard.css'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import icon1 from "../../assets/images/watering-plants.png";
import { PiPlant } from "react-icons/pi";
import { GiReceiveMoney } from "react-icons/gi";
import { GiPlantWatering } from "react-icons/gi";
import { MdOutlineGroups } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaMapLocationDot } from "react-icons/fa6";
import { IoMdChatbubbles } from "react-icons/io";

const Dashboard = () => {
    return (
        <>
            <Navbar />
            <div className="dashboard">
                <div className="dashboard__container">
                    <div className="block">
                        Good Morning
                    </div>
                    <div className="title">Agricultural Dashboard</div>
                    <div className="services-container">
                        <Link to="/crop-recc" href='#' >
                            <div className="services-card">
                                <PiPlant className='icon' />
                                <div className="service__title">Crop Prediction
                                </div>
                                <p>AI-powered insights for optimal crop selection and yield forecasting</p>
                            </div>
                        </Link>
                        <Link to='/price'>
                            <div className="services-card">
                                <GiReceiveMoney className='icon' />
                                <div className="service__title">Prices
                                </div>
                                <p>AI-powered insights for optimal crop selection and yield forecasting</p>
                            </div>
                        </Link>
                        <a href='#' >
                            <div className="services-card">
                                <GiPlantWatering className='icon' />
                                <div className="service__title">Smart irrigation
                                </div>
                                <p>AI-powered insights for optimal crop selection and yield forecasting</p>
                            </div>
                        </a>
                        <Link to="/lease-market" href='#' >
                            <div className="services-card">
                                <MdOutlineGroups className='icon' />
                                <div className="service__title">Lease Market
                                </div>
                                <p>AI-powered insights for optimal crop selection and yield forecasting</p>
                            </div>
                        </Link>
                        <Link to='/market' >
                            <div className="services-card">
                                <FaMapLocationDot className='icon' />
                                <div className="service__title">Nearby Market Place
                                </div>
                                <p>AI-powered insights for optimal crop selection and yield forecasting</p>
                            </div>
                        </Link>

                        <a href='#' >
                            <div className="services-card">
                                <IoMdChatbubbles className='icon' />
                                <div className="service__title">Ai Assistance
                                </div>
                                <p>AI-powered insights for optimal crop selection and yield forecasting</p>
                            </div>
                        </a>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Dashboard