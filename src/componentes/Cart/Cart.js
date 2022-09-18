import CartContext from "../Context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table'
import './Cart.css'

const CartDetail = () =>{
    const {cart, clearCart, removeItem} = useContext(CartContext)

    const total = cart.reduce((acc, sum) => {
        return acc + sum.total
    }, 0)

    console.log(total)
    return(
        <div className='cart'>
            <h1>{cart.length === 0 ? 'Tu Carrito está vacio' :  'Tu carrito'}</h1>
            
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th/>
                    <th>Productos</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((u) => {
                        return (
                        <tr key={u.id}>
                        <td>${u.precio}</td>
                        <td>{u.quantity}</td>
                        <td>${u.total}</td>
                        </tr>)
                    })}
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    <td colSpan={4}>Total: ${total}</td>
                    </tr>
                </tbody>
            </Table>
            <div className='containerButton'>

                {cart.length !== 0 && <button className='col-auto button' onClick={clearCart}>Vaciar Carrito</button>}
                {cart.length !== 0 && <button className='col-auto button' ><Link to='/checkout'>Pagar</Link></button>}
            </div>
        </div>
    )
}

export default CartDetail
