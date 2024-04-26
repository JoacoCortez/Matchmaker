import React, { useState } from 'react';
import "./Filter,css";


function Filter() {
  
  // Filter among all the fighters by their quantity of fights, weight and belt rank

  

    const [formData, setFormData] = useState({
        fightsQuantity: 0,
        weight: null,
        belt: ""
    })

    async function handleChange(e){
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })


    }

    return (
    <div className='filter-div-container'>
        <div className='fights-quantity-filter'>
            <label htmlFor="fights-quantity">Cantidad de Peleas:</label>
            <input type="number" name='fights-quantity' value={formData.fightsQuantity} onChange={handleChange} required />
        </div>
        <div className='weight-filter'>
            <label htmlFor="weight">Peso:</label>
            <input type="number" name='weight' value={formData.weight} onChange={handleChange} required />
        </div>
        <div className='belt-filter'>
            <label htmlFor="belt">Cinturón:</label>
            <input type="color" name='belt' value={formData.belt} onChange={handleChange} required />
        </div>
    </div>
  )
}

export default Filter   