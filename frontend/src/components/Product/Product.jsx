import React from 'react'

const Product = ({name , imgrul , price}) => {
    return (
        <div className="product">
            <img src={imgrul} alt="" />
            <div className="data">
                <div className="name">{name}</div>
                <div className="price">
                    <span>₹ {price} / Per Hour</span>
                </div>
            </div>
            <button >
                Book Now
            </button>
        </div>
    )
}

export default Product