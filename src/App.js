import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


  // Components //
import Header from './components/Header/Header'; 
/* import CardComponent from './components/CardComponent/CardComponent'; */
import NavBar from './components/NavBar/NavBar';
/* import ItemCount from './components/ItemCount/ItemCount'; */
import ItemCount from './components/ItemCount/ItemCount';
/* import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer' */
/* import Spinner from './components/CardComponent/Spinner'; */

  // VIEWS //
import Home from './views/Home/Home';
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import CharacterDetail from './views/CharacterDetail/CharacterDetail';



const App = () => {


return (
      <div>
<Router>
			<div className='App'>
				<NavBar />
        <Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/detail/:id' element={<CharacterDetail />} />
				</Routes>
			</div>
		</Router>
       {<div className='UserSection'>
{/*             <ItemDetailContainer data={data}/> */}
        </div>
        }
        <ItemCount/>
      </div>
    )
  }

export default App;

