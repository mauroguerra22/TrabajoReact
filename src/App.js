import React, { useEffect, useState } from 'react';
import './App.css';


  //Components 

/* import Header from './components/Header/Header'; */
/* import CardComponent from './components/CardComponent/CardComponent'; */
import NavBar from './components/NavBar/NavBar';
/* import ItemCount from './components/ItemCount/ItemCount'; */
import CardComponent from './components/CardComponent/CardComponent';
import ItemCount from './components/ItemCount/ItemCount';
/* import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer' */
/* import Spinner from './components/CardComponent/Spinner'; */


const App = () => {
   const [data, setData] = useState ({});

    useEffect(() => {
      fetch('https://api.nasa.gov/planetary/apod?api_key=yd5oC0qrC72u5p6WJIKrdApvvdVOrdSd1lzdugLQ')
      .then((response) => response.json())
      .then((json) => console.log(json));
    });
  

return (
      <div>
        <div className='Nav'>
          <NavBar/>
        </div>

       {<div className='UserSection'>
            <CardComponent 
              name='Creatina'
              date='Ingresa el 2022'
              description='Creatine monohidrate es 100% pura creatina micronizada de máxima absorción. Ideal para quienes buscan aumentar y recuperar masa muscular después de intensos entrenamiento de pesas.'
              img='https://d22fxaf9t8d39k.cloudfront.net/f953455d41fd7006f87b8d151826ee5c42c673a7bfb5c2efb91aa1bf8dfbef2a30102.png' 
              /><CardComponent data={data}/>
        </div>
        }
        <ItemCount/>
      </div>
    )
  }

export default App;

