import React from "react";
import './Services.css'
import icon1 from "../../assets/images/watering-plants.png";
import icon2 from "../../assets/images/growing-plant.png"
import icon3 from "../../assets/images/planting.png"
import icon4 from "../../assets/images/market-positioning.png"
import icon5 from "../../assets/images/gold.png"
import chat from "../../assets/images/chat.png"

function Services() {
    return (
        <>
            {/* <div className="Hero"> */}
            <div className="service-content">
                <div className="block">Our Services</div>
                <div className="title">
                    <h2>What We Offer</h2>
                    <p className="desc">
                        Discover Our Innovative Farming Solutions for Smarter, Greener, and More Productive Agriculture
                    </p>
                </div>

                <div className="service">
                    <div>
                        <img src={icon2} />
                        <h2 className="">Crop Recommendation</h2>
                        <p className="desc">
                            Get AI-driven crop suggestions based on soil and climate for maximum yield.
                        </p>
                    </div>

                    <div>
                        <img src={icon1} />
                        <h2 className="">Smart Irrigation</h2>
                        <p className="desc">
                            Optimize water usage with AI-powered irrigation, reducing waste and improving efficiency.
                        </p>
                    </div>

                    <div>
                        <img src={icon3} />
                        <h2 className="">Nearby MarketPlaces</h2>
                        <p className="desc">
                            Find the best local markets to sell your produce at competitive prices.
                        </p>
                    </div>
                    <div>
                        <img src={icon4} />
                        <h2 className="">Lease Equipments</h2>
                        <p className="desc">
                            Rent modern farming tools at affordable rates to boost productivity.
                        </p>
                    </div>
                    <div>
                        <img src={icon5} />
                        <h2 className="">Future Prices</h2>
                        <p className="desc">
                            Get real-time price forecasts to plan your harvest for maximum profits.
                        </p>
                    </div>
                    <div>
                        <img src={chat} />
                        <h2 className="">Personalized Assistance</h2>
                        <p className="desc">
                            Track crop health using smart sensors and AI-powered analytics.
                        </p>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    );
}

export default Services;
