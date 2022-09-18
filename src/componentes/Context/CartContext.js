import { useState, createContext, useContext} from 'react'
import AlertContext  from './Alert';

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const {setNotification} = useContext(AlertContext)
    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])
        } else {
            const cartUpdated = cart.map(prod => {
                if(prod.id === productToAdd.id) {
                    const productUpdated = {
                        ...prod,
                        quantity: productToAdd.quantity
                    }
                    return productUpdated
                } else {
                    return prod
                }
            })

            setCart(cartUpdated)
        }
    }

    const clearCart = () => {
        setNotification(`Tu carrito se ha vaciado`)
        setCart([])
    }

    const removeItem = (id) => {
        const prod = cart.find(u => u.id === id)
        setNotification(`Cuidado:, Removiste ${prod.quantity} ${prod.titulo}`)
        const newCartWithoutProduct = cart.filter(prod => prod.id !== id)
        setCart(newCartWithoutProduct)
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
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