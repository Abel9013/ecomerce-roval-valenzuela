import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <h2 className="greeting">{greeting} </h2>
      <ItemCount stock={10} />
    </>
  );
};

export default ItemListContainer  