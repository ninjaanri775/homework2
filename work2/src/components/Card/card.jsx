import React from "react";
import './card.css';

export default function Card({img, price, amount, Name, about, color }) {
    return (
        <div className="card" style={{ background: color }}>
            <img src={img} alt="" />
            <h3>Price: {price}</h3>
            <h3>Amount: {amount}</h3>
            <h3>Name: {Name}</h3>
            <h3>About: {about}</h3>
            <button className="buy">Buy</button>
        </div>
    );
}