import React, { useEffect, useState } from 'react'
import { getData } from '../helpers/getFetch'
import ItemDetail from '../itemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        getData()
        .then((res) => setProduct(res))
        .catch((err) => console.log(err))
        .finally(() => {
            setLoading(false)
        })
    },[product])

    
  return (
    loading?
    <div className='container spinner'>
        <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
    :
    <ItemDetail product={product} />
    )
}

export default ItemDetailContainer