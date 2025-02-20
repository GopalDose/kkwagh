import React from 'react'

const Product = () => {
    return (
        <div className="product">
            <img src="https://cdn.britannica.com/43/128643-004-17C2CD69/Tractor.jpg" alt="" />
            <div className="data">
                <div className="name">Jhon Deere Tractor</div>
                <div className="price">
                    <span>₹ 5000 / Per Day</span>
                </div>
            </div>
            <button >
                Book Now
            </button>
        </div>
    )
}

export default Product