import React from "react";
import './Lists.css';
import Goods from "../Goods/Goods";
import { NavLink } from "react-router-dom";

const Lists = ({ goods }) => {
 
    return (
<div>
    { 
      goods.map((good, i) => { 
      return( 
        <NavLink key={i} to={`/goods/${good.id}`}>
      <Goods 
        name={good.name}
        description={good.description}
        price={good.price}
        id={good.id}
      />
      </NavLink>
    )
  })
}
</div>
  );
}

export default Lists;