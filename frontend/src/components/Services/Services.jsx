import React from "react";
import icon1 from "../../assets/images/watering-plants.png";
import icon2 from "../../assets/images/growing-plant.png"
import icon3 from "../../assets/images/planting.png"
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
              <img src={icon1} />
              <h2 className="">Water Irrigation Guidance</h2>
              <p className="desc">
              Optimize water usage with intelligent irrigation recommendations, ensuring crops receive the right amount of water at the right time, improving efficiency and sustainability.
              </p>
            </div>

            <div>
              <img src={icon2} />
              <h2 className="">Crop Recommendation</h2>
              <p className="desc">
              Get data-driven insights on the best crops to grow based on soil conditions, climate, and market trends, maximizing productivity and profitability.
              </p>
            </div>

            <div>
              <img src={icon3} />
              <h2 className="">Personalized Assistance</h2>
              <p className="desc">
              Receive tailored farming advice and real-time support based on your specific needs, helping you make informed decisions for better agricultural outcomes
              </p>
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  );
}

export default Services;
