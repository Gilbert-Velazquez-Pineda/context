import { useState } from 'react';
import { Button } from 'react-bootstrap';


function ItemCount ({stock, onAdd}) {
    
    const [quantity, setquantity,] = useState (1)
    
    return (
        <>
        <div class="flex items-stretch">
        <button className="btn btn-dark mx-3" onClick={() => setquantity(quantity + 1)} disabled={quantity === stock}>+</button>
        <h5 className='py-1'> Cantidad: {quantity} </h5>
        <button className="btn btn-dark mx-3"  onClick={() => setquantity(quantity - 1)} disabled={quantity === 0}>-</button>
       </div>
        
       <div class="flex items-center">
       <Button className="btn btn-primary mx-3 my-2" onClick={() => onAdd(quantity)}  disabled={quantity === 0}>Comprar</Button>
       <button className="btn btn-danger mx-3 my-2" onClick={() => setquantity(0)}>Limpiar</button>
       </div>
        </>
    );


}
export default ItemCount