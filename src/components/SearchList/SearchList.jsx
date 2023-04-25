import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../helpers/getFetch'

const SearchList = () => {
  const [loading, setLoading] = useState(true)
  const [products, setProduct] = useState([])
  const [filtrados, setFiltrados] = useState([])
  const params = useParams()
  const busqueda = params.busqueda

    useEffect(() => {
      getFetch()
      .then ((res) => {
          setProduct(res)
        })
        .finally(() => {
          setLoading(false)
        })
      }, [])

      useEffect(() => {
        const result = products.filter((product) => {
          const lowerBusqueda = busqueda.toLowerCase(); // Convertir la búsqueda a minúsculas
          const lowerNombre = product.nombre.toLowerCase(); // Convertir el nombre del producto a minúsculas
          const lowerDescripcion = product.descripcion.toLowerCase(); // Convertir la descripción del producto a minúsculas
          return lowerNombre.includes(lowerBusqueda) || lowerDescripcion.includes(lowerBusqueda); // Comparar en minúsculas
        });
        setFiltrados(result);
      }, [busqueda, products]);
  
      return (
        loading ?
        <div className='container spinner'>
          <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
          </div>
        </div>
        :
    <div>
      {
        filtrados.forEach(prod => {
          filtrados.nombre
        })
      }
    </div>

  )
}

export default SearchList