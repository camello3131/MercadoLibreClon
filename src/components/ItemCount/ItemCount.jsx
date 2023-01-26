import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export const ItemCount = ( {stock, initial, onAdd} ) => {

    const [count, setCount] = useState(initial)
    const [type, setType] = useState(false)

    function add() {
        setCount(count +1)
        document.getElementById("btnRestar").disabled= false
        if(count === stock -1) {
            const btn = document.getElementById("btnSumar")
            btn.disabled= true
        }
    }
    
    function remove() {
        setCount(count -1)
        document.getElementById("btnSumar").disabled= false
        if (count <= initial) {
            const btn = document.getElementById("btnRestar")
            btn.disabled= true
        }
    }

    useEffect(() => {
        if(count === initial) {
            document.getElementById("btnRestar").disabled = true
        }
    }, [count])

    const inputStyle = {
        border: "0",
        width: "30%"

    }


  return (
    <>
        <div className=' d-flex justify-content-center' >
            <button href="#" className="btn btn-primary" id='btnSumar' onClick={add}>+</button>
            <input type="text" value={count} id='inputAddToCart' className='text-center' style={inputStyle}/>
            <button href="#" className="btn btn-primary" id='btnRestar' onClick={remove}>-</button>
        </div>
        <br></br>
        {
            type?
            <div className='container d-flex justify-content-center'>
            <Link className='btn btn-primary' to={"/cart"}>
                Ir al carrito
            </Link>
            <Link className='btn btn-primary' to={"/"}>
                Seguir comprando
            </Link>
            </div>
            :
        <div className='container d-flex justify-content-center'>
            <a href="#" className="btn btn-primary"  onClick={() => {
                setType(true)
                onAdd(count)}} 
                style={{width: "100%"}} >Agregar al carrito</a>
        </div>
        }
    </>
  )
}
