import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = () => {
  const onAdd = (cantidad) => {
    console.log(cantidad);
  }
  return (
    <>
      <h2 className='greeting'>Bienvenidos a nuestra tienda de gaming </h2>
      <ItemCount initial={1} stock={10} onAdd={onAdd} />
    </>
  )
}

export default ItemListContainer








