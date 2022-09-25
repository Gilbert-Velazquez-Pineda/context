import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { collection, getDocs, getFirestore } from "firebase/firestore";

function ItemListContainer() {

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
      <div className="bg-neutral-300">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-center">Catalago de productos</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {items.map((item) => (
            <div key={item.id} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src={item.imagen}
                  alt="no cargo"
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    
                     <Link to={`/${item.id}`} key={item.id}>
                       <div className="m-2 p-2 bg-blue-300"> { item.titulo } </div>
                     </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-700">Stock: { item.stock }</p>
                </div>
                <p className="text-sm font-medium text-gray-900">precio: ${item.precio}</p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
    )
}
  export default ItemListContainer