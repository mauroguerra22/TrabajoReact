import React, { Component } from 'react';
import './App.css';

//Components 
import Header from './components/Header/Header';
/* import CardComponent from './components/CardComponent/CardComponent'; */
import NavBar from './components/NavBar/NavBar';
import ItemCount from './components/ItemCount/ItemCount';
import CardComponent from './components/CardComponent/CardComponent';


class App extends Component {
  constructor() {
    super() 

    this.state = {
        counter: 0,
      };

      //Bind apply call js (Ver video)
      this.handlerCounterUp = this.handlerCounterUp.bind(this);

      //1era Opcion, sin usar arrow function, tenemos que aplicar bind en el metodo constructor
      // handlerCounterUp() {
      // this.setState ({ counter: this.state.counter + 1});
      // }
      //2da Opcion, aplicando arrow function, no tenemos qeu aplicar bind en el metodo constructor

    }
  
    handlerCounterUp = () => {
      this.setState({counter: this.state.counter + 1})
    }

    handlerCounterDown = () => {
      this.setState({counter: this.state.counter - 1})
    }

  render () {
    return (
      <div>
        <div className='Nav'>
          <NavBar/>
        </div>
        <Header />
       {<div className='UserSection'>
            <CardComponent 
              name='Creatina'
              date='Ingresa el 2022'
              description='Creatine monohidrate es 100% pura creatina micronizada de máxima absorción. Ideal para quienes buscan aumentar y recuperar masa muscular después de intensos entrenamiento de pesas.'
              img='https://d22fxaf9t8d39k.cloudfront.net/f953455d41fd7006f87b8d151826ee5c42c673a7bfb5c2efb91aa1bf8dfbef2a30102.png' 
              />   
            </div>
        }
      </div>
    )
  }
}

export default App;