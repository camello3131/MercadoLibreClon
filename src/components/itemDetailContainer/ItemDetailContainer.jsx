import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import {useParams} from "react-router-dom"
import {getFirestore, doc, getDocs, collection } from "firebase/firestore"
import { app } from '../../firebase/config'

export const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);[]
  const [prodDb, setProdDb] = useState([])
  const { detalleId } = useParams();


  useEffect(() => {
    const queryDB = getFirestore(app);
    const queryCollection = collection(queryDB, "datos");
    getDocs(queryCollection)
      .then((res) => {
        const data = res.docs.map((doc) => doc.data());
        setProdDb(data);
        setLoading(false);
        const item = data.find((prod) => prod.id === parseInt(detalleId));
        setItem(item);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <div className="container spinner">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div>
          <ItemDetail item={item} ></ItemDetail>
        </div>
      )}
    </div>
  );
};

  

export default ItemDetailContainer