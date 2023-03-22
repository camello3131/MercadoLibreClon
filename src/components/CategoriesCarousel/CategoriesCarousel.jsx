import React, { useState } from 'react';
import { categorias } from '../helpers/getFetch.js';
import ItemCategoria from '../ItemCategoria/ItemCategoria.jsx';
import "./categories.css"

const CategoriesCarousel = () => {
  const itemsPerRow = 7;
  const numViews = Math.ceil(categorias.length / 14); // Calculamos el número total de vistas
  const [startIndex, setStartIndex] = useState(0);
  const [viewIndex, setViewIndex] = useState(0); // Agregamos el estado para el índice de la vista actual
  const rows = [];
  let items = [];
  
  // Obtenemos el conjunto de categorías correspondiente a la vista actual
  const currentCategories = categorias.slice(startIndex + viewIndex * 14, startIndex + (viewIndex + 1) * 14);

  currentCategories.forEach((categoria, index) => {
    if (index > 0 && index % itemsPerRow === 0) {
      rows.push(<div className="row" key={index}>{items}</div>);
      items = [];
    }
    items.push(<div className="col" key={categoria.id}><ItemCategoria categoria={categoria} /></div>);
  });
  if (items.length > 0) {
    rows.push(<div className="row" key={currentCategories.length}>{items}</div>);
  }

  const handleShowMore = () => {
    setStartIndex(startIndex + 14);
  }

  const handleNext = () => {
    if (viewIndex < numViews - 1) {
      setViewIndex(viewIndex + 1);
    }
  }


  return (
    <div className="container-all-carousel">
      <div className="section-header">
        <h2>Categorías Populares</h2>
        <div>
  <svg class="nc-icon" aria-labelledby="MLA1743">
    <use xlink:href="#nc-car-front"></use>
  </svg>
</div>

      </div>
      {rows.slice(0, 2)}
      {numViews > 1 && ( // Agregamos botones solo si hay más de una vista
        <div>
          {viewIndex > 0 && (
            <button onClick={() => setViewIndex(viewIndex - 1)}>&lt;</button>
          )}
          {viewIndex < numViews - 1 && (
            <button onClick={handleNext}>&gt;</button>
          )}
        </div>
      )}
      {rows.slice(2)}
    </div>
  );
}

export default CategoriesCarousel;

