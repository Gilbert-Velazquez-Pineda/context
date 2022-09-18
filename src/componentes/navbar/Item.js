import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ItemDetail.css'
import ItemCount from '../paginas/ItemCount';
import {useState, useContext} from 'react';
import CartContext from '../Context/CartContext';
import AlertContext from '../Context/Alert';
import { Link } from 'react-router-dom';



const ItemDetail = ( {id, imagen, titulo, precio, stock} ) => {

  const [quantityToAdd, setQuantityToAdd] = useState(0)
  const { addItem, getProductQuantity } = useContext(CartContext)
  const {setNotification} = useContext(AlertContext)
  
  const handleOnAdd = (quantity) => {
      setQuantityToAdd(quantity)

      const productToAdd = {
          id, titulo, precio, quantity:Number(quantity), total:(precio*quantity)
      }
      if(quantity<=0){
          setNotification('danger',`Sorry! We don't have stock`)
      } else{
          addItem(productToAdd)
          setNotification('success',`You added ${quantity} ${titulo}`)
      }
  }

  const productQuantity = getProductQuantity(id)

    return (
      <article className="CardItemDetalle">
      <header className="Header">
          <h2 className="ItemHeader">
              {titulo}
          </h2>
      </header>
      <picture>
          <img src={imagen} alt={titulo} className="ItemImgDetalle"/>
      </picture>
      <section>
          <p className="InfoDetalle">
              Categoria: {id}
          </p>
          <h6 className="InfoDetalle">
              Descripción: {stock}
              </h6>
          <p className="InfoDetalle">
              Precio: ${precio} mxn
          </p>
      </section>           
      <footer className='ItemFooter'>
          {
              quantityToAdd === 0 ? (
                  <ItemCount onAdd={handleOnAdd} stock={stock} initial={productQuantity}/>
              ) : (
                  <Link to='/cart'>Finalizar compra</Link>
              )
          }
      </footer>
  </article>
    )
  }
  export default ItemDetail
  