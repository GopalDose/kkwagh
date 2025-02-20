import React from 'react'
import './Dashboard.css'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import icon1 from "../../assets/images/watering-plants.png";
import { PiPlant } from "react-icons/pi";
import { GiReceiveMoney } from "react-icons/gi";
import { GiPlantWatering } from "react-icons/gi";
import { MdOutlineGroups } from "react-icons/md";

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
                        <a href='#' >
                            <div className="services-card">
                                <PiPlant className='icon' />
                                <div className="service__title">Crop Prediction
                                </div>
                                <p>AI-powered insights for optimal crop selection and yield forecasting</p>
                            </div>
                        </a>
                        <a href='#' >
                            <div className="services-card">
                                <GiReceiveMoney className='icon' />
                                <div className="service__title">Prices
                                </div>
                                <p>AI-powered insights for optimal crop selection and yield forecasting</p>
                            </div>
                        </a>
                        <a href='#' >
                            <div className="services-card">
                                <GiPlantWatering  className='icon' />
                                <div className="service__title">Smart irrigation
                                </div>
                                <p>AI-powered insights for optimal crop selection and yield forecasting</p>
                            </div>
                        </a>
                        <a href='#' >
                            <div className="services-card">
                                <MdOutlineGroups  className='icon' />
                                <div className="service__title">Lease Market
                                </div>
                                <p>AI-powered insights for optimal crop selection and yield forecasting</p>
                            </div>
                        </a>
                        <a href='#' >
                            <div className="services-card">
                                <PiPlant className='icon' />
                                <div className="service__title">Crop Prediction
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