import  './ItemCount.css'
import React from 'react'
import { useState } from 'react'

const ItemCount = ({ stock, initial/* , onAdd  */ }) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => (quantity < stock) ? setQuantity(quantity + 1) : alert('No hay mas productos en stock')

    const decrement = () => (quantity > 1) ? setQuantity(quantity - 1) : alert('No se agregaron productos para eliminar')


    /* const reset = () => {
        setQuantity(0)
    } */


    return (
        <div className='container'>
            <div className=' d-md-flex justify-content-center align-items-center flex-column '>
                <div className='row'>
                    <div className='col'>
                        <button type="button" className="btn btn-primary btn-sm" onClick={increment}>+</button>
                    </div>
                    <div className='col'> 
                        <h4 className='m-0'>{quantity}</h4>
                    </div>
                    <div className='col'>
                        <button type="button" className="btn btn-primary btn-sm" onClick={decrement}>-</button>
                    </div>
                </div>
                <div className='col'>
                    <button type='button' className="btn btn-primary btn-sm">Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount
