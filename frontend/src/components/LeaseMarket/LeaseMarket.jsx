import React from 'react';
import './LeaseMarket.css';
import Product from '../Product/Product';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const LeaseMarket = () => {
    return (
        <>
        <Navbar />
            <div className="lease-market">
                <div className="block">Farm Equipment</div>
                <h1 className="heading">Lease Farm Equipment</h1>
                <p className="desc">
                    Access top-quality agricultural machinery for your farming needs. Flexible daily and monthly rates available.
                </p>

                <div className="search-bar">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="search-icon"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 3a7 7 0 015.51 11.27l5.61 5.62a1 1 0 01-1.42 1.42l-5.62-5.61A7 7 0 1110 3zm0 2a5 5 0 100 10 5 5 0 000-10z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <input type="text" placeholder="Search equipment..." className="search-input" />
                </div>

                <div className="category">
                    <ul>
                        <li>
                            <button className="active">All</button>
                        </li>
                        <li>
                            <button>Pumps</button>
                        </li>
                        <li>
                            <button>Tractor & Equipments</button>
                        </li>
                        <li>
                            <button>Others</button>
                        </li>
                    </ul>
                </div>

                <div className="product-container">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default LeaseMarket;
