import { useState, createContext} from 'react'
import Swal from 'sweetalert2';

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    
    const [cart, setCart] = useState([])


    const addItem = (productToAdd) => {

        if(isInCart(productToAdd.id)) {
            return Swal.fire("El articulo ya esta en el carrito")
            
        } else {
            setCart([...cart, productToAdd])
            Swal.fire(`Se añadio  al Carrito`)
        }
    }


    
    //vaciar carrito
    const clearCart = () => {
        Swal.fire(`Tu carrito se ha vaciado`)
        setCart([])
    }

    //remover solo 1 item
    const removeItem = (id) => {
        Swal.fire({
            title: '¿Esta Seguro de eliminar el articulo?',
            text: "Esto no se podra revertir!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Borrar!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Borrado!',
                'El Articulo A Sido Borrado.',
                'success'
              )
              const remove = cart.filter((prod) => prod.id !== id)
        
        return setCart(remove)
            }
          })
        
    }

   

    //comprobar si esta ya el item en el carrito
    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    const getQuantity = () => {
        let accu = 0
        cart.forEach(prod => {
        accu += prod.quantity
        })
        return accu
    }

    const getTotal = () => {
        let accu = 0
        cart.forEach(prod => {
        accu += prod.quantity * prod.precio
        })
        
        return accu
    }


    const getProductQuantity = (id) => {
        const product = cart.find(prod => prod.id === id)
        return product?.quantity
    }

    return (
        <CartContext.Provider value={{ cart, addItem, getQuantity, isInCart, removeItem, clearCart, getProductQuantity, getTotal }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext