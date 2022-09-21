import Card from 'react-bootstrap/Card';
import ItemCount from '../paginas/ItemCount';
import {useState, useContext} from 'react';
import CartContext from '../Context/CartContext';
import { Link } from 'react-router-dom';




const ItemDetail = ( {id, imagen, titulo, precio, stock} ) => {

  const [quantityToAdd, setQuantityToAdd] = useState(0)
  const { addItem, getProductQuantity } = useContext(CartContext)
  
  //add items
  const handleOnAdd = (quantity) => {
      setQuantityToAdd(quantity)

      const productToAdd = {
          id, titulo, precio, quantity:Number(quantity), total:(precio*quantity)
      }
          addItem(productToAdd)
          
  }
  const productQuantity = getProductQuantity(id)

   
    return (
        <>
        <div className="grid place-items-center ">  
        <Card style={{ width: '18rem'}} >
          <Card.Img variant="top" src={imagen} />
          <Card.Body>
            <Card.Title className='text-center' >{titulo}</Card.Title>
            <Card.Body className='text-center'><strong>Precio: ${precio} MXN</strong></Card.Body>
            {
              quantityToAdd === 0 ? (
                  <ItemCount onAdd={handleOnAdd} stock={stock} initial={productQuantity}/>
              ) : (
                  <Link className='btn btn-primary' to='/cart'>Ir A Carrito</Link>
              )
            }
            <Card.Text>
               Stock: {stock} pzas
            </Card.Text>
            <Link to='/ItemListContainer' variant="secondary" className='btn btn-outline-info absolute bottom-2 right-1 h-10 w-30'>Seguir Comprando</Link>
          </Card.Body>
      </Card>
      </div>
      </>       
    )
  }
  export default ItemDetail
  