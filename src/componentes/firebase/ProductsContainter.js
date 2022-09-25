import { useEffect, useState } from "react"
import { collection,  getDocs, getFirestore } from "firebase/firestore";


export const ProductCard = ( {titulo, precio, stock, imagen, id} ) => {
  return (
    <div>
        <li>{titulo}</li>
        <li>{precio}</li>
        <li>{stock}</li>
        <img className="w-20" src={imagen} alt=''/>
    </div>
  )
}

const ProductsContainter = () => {

  const [items, setItems] = useState([])

  useEffect(() => {
    getProducts()
  }, [])
  console.log(items);



  const getProducts = () => {
    const db = getFirestore()
    const itemCollection = collection( db, 'products' )
    getDocs( itemCollection ).then( snapshot => {
        setItems( snapshot.docs.map( d => ({id: d.id, ...d.data()}) ) );
    })
  }

  return (
      <>
      { items.map( p => <ProductCard key={p.id} {...p}/> ) }
    </>
  )
}
export default ProductsContainter