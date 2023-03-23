import React, { useEffect, useState } from 'react'
import { getFetch } from '../helpers/getFetch'
import ItemDetail from '../itemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [products, setProducts] = useState([])
    const [product, setProduct] = useState ({})
    const [loading, setLoading] = useState(true)
    const params = useParams()


    useEffect(() =>{
        getFetch()
        .then ((res) => {
            setProducts(res)
            setProduct(res.filter(product => product.id === params.detalleId))
          })
        .catch((err) => console.log(err))
        .finally(() => {
            setLoading(false)
            console.log(product)
        })
    },[])

    
  return (
    loading?
    <div className='container spinner'>
        <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
    :
    <ItemDetail product={product}/>
    )
}

export default ItemDetailContainer