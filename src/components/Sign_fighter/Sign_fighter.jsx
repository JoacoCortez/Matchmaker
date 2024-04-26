import React, { useState } from 'react';
import "./Sign_fighter.css";

function SignFighter() {
  
  // Instance to register the fighter

  const [formData, setFormData] = useState({
    name: " ",
    age: 0,
    gender: {male: "masculino", female: "femenino"},
    weight: 0,
    fightsQuantity: 0,
    modality: {boxeo: "boxeo", kickboxing: "kickboxing", k1: "k1"}
  })
  
  async function handleSubmit(){

  }
  
  async function handleChange(e){
    e.preventDefault()
    setFormData(({
      ...formData, [e.target.name] : e.target.value
    }))
  }

  return (
    <div className='sign-form-container'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input type="text" onChange={handleChange} name='name' value={formData.name} required />
        
        <label htmlFor="age">Edad:</label>
        <input type="number" onChange={handleChange} name='age' value={formData.age} required />
        
        <label htmlFor="gender">Género:</label>
        <input type="checkbox" onChange={handleChange} name='gender' value={formData.gender} required />

        <label htmlFor="weight">Peso:</label>
        <input type="number" onChange={handleChange} name='weight' value={formData.weight} required />

        <label htmlFor="fightsQuantity">Cantidad de Peleas:</label>
        <input type="number" onChange={handleChange} name='fightsQuantity' value={formData.fightsQuantity} required />

        <label htmlFor="modality">Modalidad:</label>
        <input type="checkbox" onChange={handleChange} name='modality' value={formData.modality} required />
      </form>
    </div>
  )
}

export default SignFighter