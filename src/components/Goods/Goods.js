import React from "react";
import './Goods.css';
import { NavLink
 } from "react-router-dom";

 const Goods = ({name, description, price, id}) => {
    return (
<div className='grow bg-light-white br3 ma1 dib bw2 mw6 h6 card black'>
      <img className="card bg-light-gray" alt='robots' src={`https://robohash.org/${id}?size=230x200`} />
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <h3>{price}</h3>
      </div>
    </div>
  );
}

export default Goods;