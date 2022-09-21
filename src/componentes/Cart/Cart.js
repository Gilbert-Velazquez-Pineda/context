import CartContext from "../Context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";



const CartDetail = () =>{
    const {cart, clearCart, removeItem} = useContext(CartContext)

    const total = cart.reduce((acc, sum) => {
        return acc + sum.total
    }, 0)

    
    return(
      
<div className="overflow-x-auto relative shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="py-3 px-6">
                    Nombre del producto
                </th>
                <th scope="col" className="py-3 px-6">
                    Precio unitario
                </th>
                <th scope="col" className="py-3 px-6">
                    Cantidad
                </th>
                <th scope="col" className="py-3 px-6">
                    SubTotal
                </th>
                <th scope="col" className="py-3 px-6">
                    <span className="sr-only">Eliminar</span>
                </th>
            </tr>
        </thead>
        <tbody>
            {cart.map((prod) => (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-gray-500">
                    {prod.titulo}
                </th>
                <td className="py-4 px-6">
                    ${prod.precio}
                </td>
                <td className="py-4 px-6">
                    {prod.quantity}
                </td>
                <td className="py-4 px-6">
                    ${prod.total}
                </td>
                <td className="py-4 px-6 text-right">
                    <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => removeItem(prod.id) } id={prod.id}>Eliminar</button>
                </td>
                
            </tr>
           ))} 
        </tbody>
        <tfoot>
            <tr className="font-semibold text-gray-900 dark:text-dark">
                <td></td>
                <td></td>
                <th scope="row" className="py-3 px-6 text-right ">Total: </th>
                <td className="py-3 px-6 text-left"> ${total}</td>
            </tr>
        </tfoot>
    </table>
    
    <Link className="btn btn-outline-primary btn-lg mx-5 my-3" to='/'>Ir a pagar</Link>
    <button type="button" onClick={clearCart} className="btn btn-outline-secondary btn-lg ">Vaciar Carrito</button>
    <Link to='/ItemListContainer' variant="secondary" className='btn btn-outline-info  btn-lg mx-5'>Seguir Comprando</Link>

</div>

    )
}

export default CartDetail
