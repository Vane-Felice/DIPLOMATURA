import React from 'react';

function NosotrosPage () {
  return (
    <main className='contenedor'>
    <div className='contenedor-imagen'>
        <img src='img/bosque.jpg' alt='bosque' />
        <div className='texto'>Equipo pequeño, <br/>con amor por lo que hace.</div>

    </div>
    <div>
        <h2>Nuestros colaboradores</h2>
        <div className='colaboradores'>
            <div className='persona'>
                <img className='imagen' src='img/linkwar.jpg' alt='Linkwar colaborador' />
                <h5>Linkwar</h5>
                <h6>Colaborador de contenidos</h6>
            </div>
            <div className='persona'>
                <img class='imagen' src='img/ayelen.jpg' alt='Ayelen colaboradora' />
                <h5>Ayelen Perez</h5>
                <h6>Colaboradora de contenidos</h6>
            </div>
            <div className='persona'>
                <img className='imagen' src='img/luis.jpg' alt='Luis desarrollador web' />
                <h5>Luis Anton</h5>
                <h6>Desarrollador web</h6>
            </div>
                <div className='persona'>
                    <img className='imagen' src='img/gretel.jpg' alt='Gretel fotógrafa' />
                    <h5>Gretel Poison</h5>
                    <h6>Fotógrafa</h6>
                </div>
                <div className='persona'>
                    <img className='imagen' src='img/dante.jpg' alt='Dante entomólogo' />
                    <h5>Dante Vulcan</h5>
                    <h6>Entomólogo</h6>
                </div> 
        </div>
    </div>
</main>
  );
}

export default NosotrosPage;