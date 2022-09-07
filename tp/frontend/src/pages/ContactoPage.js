import React from "react";
import { useState } from "react";
import axios from 'axios';



const ContactoPage = (props) => {

  const initialForm = {
    nombre: '',
    apellido: '',
    email: '',
    comentario: ''
  }

  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState('');
  const [formData, setForData] = useState(initialForm);

  const handleChange = e => {
    const { name, value } = e.target;
    setForData(oldData => ({
      ...oldData,
      [name]: value
    }));
  }

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg('');
    setSending(true);
    const response = await axios.post('http://localhost:3000/api/contacto', formData);
    setSending(false);
    setMsg(response.data.message);
    if (response.data.error === false) {
      setForData(initialForm)
    }
  }


  return (
    <main className='contenedor'>
      <div>
        <h2>contáctate con nosotros!</h2>
        <form action='/contacto' className='formulario' method="post" onSubmit={handleSubmit} >
          <input type='text' name="nombre" value={formData.nombre} onChange={handleChange} placeholder='Nombre' />
          <input type='text' name="apellido" value={formData.apellido} onChange={handleChange} placeholder='Apellido' />
          <br /><br />
          <input type='email' name="email" value={formData.email} onChange={handleChange} placeholder='mail' />
          <br /><br />
          <textarea name='comentario' cols='30' rows='10' value={formData.comentario} onChange={handleChange} placeholder='deje su mensaje aqui'></textarea>
          <br />
          <input className='enviar' type='submit' />
          <br />
          <br />

        </form>
        {sending ? <p>Enviando...</p> : null}
        {msg ? <p>{msg}</p> : null}

        {/* <i className='fa-brands fa-facebook-f icono'></i>
            <i className='fa-brands fa-instagram icono'></i>
            <i className='fa-brands fa-twitter icono'></i>
            <i className='fa-solid fa-envelope icono'></i> */}
      </div>

    </main >
  );
}

export default ContactoPage;