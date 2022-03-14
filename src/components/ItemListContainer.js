import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = () => {
  return (
    <>
      <h2 className='greeting'>Bienvenidos a nuestra tienda de gaming </h2>
      <ItemCount stock={10}/>
    </>
  )
}

export default ItemListContainer