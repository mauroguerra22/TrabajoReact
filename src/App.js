import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

  //Components 

/* import Header from './components/Header/Header'; */
/* import CardComponent from './components/CardComponent/CardComponent'; */
import NavBar from './components/NavBar/NavBar';
/* import ItemCount from './components/ItemCount/ItemCount'; */
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
/* import Spinner from './components/CardComponent/Spinner'; */


const App = () => {
  const [data, setData] = useState ({});

  useEffect(() => {
    axios('https://api.nasa.gov/planetary/apod?api_key=yd5oC0qrC72u5p6WJIKrdApvvdVOrdSd1lzdugLQ')
    .then(res => setData(res.data))
  }, []);
  

return (
      <div>
        <div className='Nav'>
          <NavBar/>
        </div>

       {<div className='UserSection'>
            <ItemDetailContainer data={data}/>
        </div>
        }
        <ItemCount/>
      </div>
    )
  }

export default App;

