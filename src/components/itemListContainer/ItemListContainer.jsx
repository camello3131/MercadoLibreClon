import React from 'react'
import { getFetch } from '../helpers/getFetch'
import ItemList from '../itemList/ItemList'
import { useState, useEffect } from 'react'
import './itemListContainer.css'
import { useParams } from 'react-router-dom'


const ItemListContainer = ({categoriaId}) => {

    const [loading, setLoading] = useState(true)
    const [products, setProduct] = useState([])
    const params = useParams()

  useEffect(() => {
    getFetch()
    .then ((res) => {
        setProduct(res)
      })
      .finally(() => {
        setLoading(false)
      })
    }, [])
    
    return (
      loading ?
        <div className='container spinner'>
          <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
          </div>
        </div>
        :
        <div className='itemList container d-flex'>
            <ItemList products={products} categoria={params.categoriaId} />
        </div>
        )
}

export default ItemListContainer