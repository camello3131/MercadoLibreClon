import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'

const Added = () => {
    const location = useLocation();
    console.log(location)
    

  return (
    <div className='container'>
        <div className='information-container'>
            <div className='image-information'>
                <div className='image-information__asset-wrapper'>
                    <div className='image-information__asset'>
                        <img src="" alt="" className='bf-ui-image--circle' />
                        <div className='bf-ui-badge bf-ui-badge__icon'></div>
                    </div> 
                </div>
                <div className='image-information__content'>
                    <div className='image-information__text'>
                        <h1 className='image-information__title'>
                            <span className='bf-ui-rich-text bf-ui-rich-text--success'>Agregaste a tu carrito</span>
                        </h1>
                        <p className='image-information__description'>
                            <span className='bf-ui-rich-text'>
                                
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className='bf-ui-detail-row-with-images'>
            <div className='bf-ui-detail-row-with-images__text'>
                <h3 className='bf-ui-detail-row-with-images__title'>
                    <span className='bf-ui-rich-text'>
                    2 productos en tu carrito: 
                    </span>
                    <span className='bf-ui-rich-price bf-ui-rich-price--bold'>
                        <span className='priceCurrency'>$</span>
                        <span className='bf-ui-price-small'>74.276</span>
                    </span>
                    <span className='bf-ui-rich-text bf-ui-rich-text--success'>
                    ¡Envío gratis!
                    </span>
                </h3>
            </div>
        </div>
    </div>
  )
}

export default Added