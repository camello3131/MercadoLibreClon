import React from 'react';
import { Link } from 'react-router-dom';
import './itemCategoria.css';

const ItemCategoria = ({ categoria }) => {
  return (
    <Link to={`/categoria/${categoria.categoria}`}>
      <div className='card-category'>
        <img src={categoria.img} alt='' className='img-categoria' />
        <p className='name-categories'>{categoria.categoria}</p>
      </div>
    </Link>
  );
};

export default ItemCategoria;