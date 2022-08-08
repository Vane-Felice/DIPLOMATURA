import React from "react";

function ContactoPage() {
  return (
    <main className='contenedor'>
      <div><h2>contáctate con nosotros!</h2>
        <form action='method' className='formulario'>
          <input type='text' placeholder='Nombre' />
          <input type='text' placeholder='Apellido' />
          <br /><br />
          <input type='email' placeholder='mail' />
          <br /><br />
          <textarea name='comentario' cols='30' rows='10' placeholder='deje su mensaje aqui'></textarea>
          <br />
          <input className='enviar' type='submit' />
          <br />
          <br />

        </form>
      {/* <i className='fa-brands fa-facebook-f icono'></i>
            <i className='fa-brands fa-instagram icono'></i>
            <i className='fa-brands fa-twitter icono'></i>
            <i className='fa-solid fa-envelope icono'></i> */}
      </div>

    </main >
       );
}

export default ContactoPage;