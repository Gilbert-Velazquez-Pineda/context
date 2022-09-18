import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({stock, initial = 1, onAdd})=> {
    const [quantity, setQuantity] = useState(stock>0 ? initial : stock);
    
    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
            console.log(quantity)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
            console.log(quantity)
        }     
    }

    return(
        <div className='Counter'>          
                <div className='Controls'>
                    <button className="Button contador" onClick={decrement} disabled = {quantity === 1}>-</button>
                    <h4 className='Number'>{quantity}</h4>
                    <button className="Button contador" onClick={increment} disabled = {quantity === stock}>+</button>
                </div>
                <div>
                    <button className="Button Add" onClick={() => onAdd(quantity)}>Agregar al carrito</button>
                </div>
        </div>
    )

}
export default ItemCount