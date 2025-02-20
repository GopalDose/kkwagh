import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import './FuturePrice.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
  
const FuturePrice = () => {
    const [selectedCrop, setSelectedCrop] = useState("Wheat");

    const cropData = {
        Wheat: [
            { month: "Jan", price: 220 },
            { month: "Feb", price: 230 },
            { month: "Mar", price: 150 },
            { month: "Apr", price: 660 },
            { month: "May", price: 270 },
            { month: "Jun", price: 780 },
            { month: "Jul", price: 290 },
            { month: "Aug", price: 800 },
            { month: "Sep", price: 910 },
            { month: "Oct", price: 220 },
            { month: "Nov", price: 330 },
            { month: "Dec", price: 340 }
        ],
        Rice: [
            { month: "Jan", price: 180 },
            { month: "Feb", price: 185 },
            { month: "Mar", price: 190 },
            { month: "Apr", price: 200 },
            { month: "May", price: 210 },
            { month: "Jun", price: 220 },
            { month: "Jul", price: 230 },
            { month: "Aug", price: 240 },
            { month: "Sep", price: 250 },
            { month: "Oct", price: 260 },
            { month: "Nov", price: 270 },
            { month: "Dec", price: 280 }
        ],
        Maize: [
            { month: "Jan", price: 150 },
            { month: "Feb", price: 155 },
            { month: "Mar", price: 160 },
            { month: "Apr", price: 170 },
            { month: "May", price: 180 },
            { month: "Jun", price: 190 },
            { month: "Jul", price: 200 },
            { month: "Aug", price: 210 },
            { month: "Sep", price: 220 },
            { month: "Oct", price: 230 },
            { month: "Nov", price: 240 },
            { month: "Dec", price: 250 }
        ],
        Barley: [
            { month: "Jan", price: 200 },
            { month: "Feb", price: 205 },
            { month: "Mar", price: 210 },
            { month: "Apr", price: 220 },
            { month: "May", price: 230 },
            { month: "Jun", price: 240 },
            { month: "Jul", price: 250 },
            { month: "Aug", price: 260 },
            { month: "Sep", price: 270 },
            { month: "Oct", price: 280 },
            { month: "Nov", price: 290 },
            { month: "Dec", price: 300 }
        ]
    };

    return (
        <>
            <Navbar />
            <div className="futurePrice">
                <div className="inner-container">
                    <h1>Future Price Prediction</h1>
                    <div className="select-crop">
                        <label>Select Crop</label>
                        <select value={selectedCrop} onChange={(e) => setSelectedCrop(e.target.value)}>
                            <option value="Wheat">Wheat</option>
                            <option value="Rice">Rice</option>
                            <option value="Maize">Maize</option>
                            <option value="Barley">Barley</option>
                        </select>
                    </div>

                    <div className="chart-container">
                        <ResponsiveContainer width="100%" height={400}>
                            <LineChart data={cropData[selectedCrop]}>
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Line type="monotone" dataKey="price" stroke="#8884d8" strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default FuturePrice;
