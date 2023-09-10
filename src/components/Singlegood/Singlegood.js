import React from 'react';
import { useParams } from 'react-router-dom';

const SingleGood = ({ goods }) => {
  const { id } = useParams();

  const good = goods.find((good) => good.id === Number(id));

  if (!good) {
    return <h2>Good not found</h2>;
  }

  const { name, description, price } = good;

  return (
    <div>
      <img className="card bg-light-gray" alt='robots' 
      src={`https://robohash.org/${id}?size=230x200`} />
      <h2>{name}</h2>
      <p>{description}</p>
      <h3>{price}</h3>
    </div>
  );
};

export default SingleGood;

