import React from 'react'
import { getFetch } from '../helpers/getFetch'
import ItemList from '../itemList/ItemList'
import { useState, useEffect } from 'react'
import './itemListContainer.css'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { app } from '../../firebase/config'


const ItemListContainer = ({categoriaId}) => {

    const [loading, setLoading] = useState(true)
    const [products, setProduct] = useState([])
    const [prodDb, setProdDb] = useState([])
    const params = useParams()

    useEffect(() => {
      const queryDB = getFirestore(app)
      const queryCollection = collection(queryDB, "datos")
      getDocs(queryCollection)
      .then((res) => {
        const data = res.docs.map(doc => doc.data());
        setProdDb(data);
      })
    
    }, [])
    
    console.log(prodDb)


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
            <ItemList products={prodDb} categoria={params.categoriaId} />
        </div>
        )
}

export default ItemListContainer