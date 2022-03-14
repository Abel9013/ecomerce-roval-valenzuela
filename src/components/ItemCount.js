import React, {useState} from 'react'

const ItemCount = ({stock}) => {

  const [counter, setCounter] = useState(0)
  const handleAdd = ()=>{
    if(counter < stock){
      
      setCounter(counter + 1 );
    }
  }
  const handleSubtract = ()=>{
    if(counter>0){
      setCounter(counter-1)
    }
  }

  return (
    <div className="contador">
      
      <h3>Contador: {counter }</h3>
      <button onClick={handleSubtract}>-</button>
      <button onClick={handleAdd}>+</button>
    </div>
  );
}

export default ItemCount