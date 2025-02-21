// export default MarketPlace
import React from 'react';
import './MarketPlace.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const markets = [
  {
    name: 'Malkapur',
    crops: [
      { crop: 'Wheat', price: '2500Rs' },
      { crop: 'Rice', price: '4500Rs' },
      { crop: 'Cotton', price: '8000Rs' },
    ],
  },
  {
    name: 'Akola',
    crops: [
      { crop: 'Sugarcane', price: '3500Rs' },
      { crop: 'Soybean', price: '6000Rs' },
      { crop: 'Tomato', price: '2500Rs' },
    ],
  },
  {
    name: 'Shegaon',
    crops: [
      { crop: 'Grapes', price: '7000Rs' },
      { crop: 'Onion', price: '3000Rs' },
      { crop: 'Pomegranate', price: '6500Rs' },
    ],
  },
  {
    name: 'Jalgaon',
    crops: [
      { crop: 'Oranges', price: '5500Rs' },
      { crop: 'Soybean', price: '5800Rs' },
      { crop: 'Turmeric', price: '7200Rs' },
    ],
  },
];

const MarketPlace = () => {
  return (
    <>
      <Navbar />
      <div className="marketplace">
        <h1>MarketPlace</h1>
        <div className="market-container">
          {markets.map((market, index) => (
            <div className="market" key={index}>
              <div className="marketName">{market.name}</div>
              <table>
                <thead>
                  <tr>
                    <th>Crop</th>
                    <th>Prices</th>
                  </tr>
                </thead>
                <tbody>
                  {market.crops.map((crop, idx) => (
                    <tr key={idx}>
                      <td>{crop.crop}</td>
                      <td>{crop.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MarketPlace;
