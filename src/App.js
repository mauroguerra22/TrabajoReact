import React, { Component } from 'react';
import './App.css';

//Components 
import Header from './components/Header/Header';
/* import CardComponent from './components/CardComponent/CardComponent'; */
import NavBar from './components/NavBar/NavBar';
import ItemCount from './components/ItemCount/ItemCount';


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
       {/*  <div className='UserSection'>
            <CardComponent 
              name='Ares'
              date='Se unio en Junio 2022'
              description='Lorem'
              img='https://st.depositphotos.com/2044631/2014/i/950/depositphotos_20146623-stock-photo-tigers-face.jpg' 
              />   
        </div>
        <div className='CounterSection'>
          <p>Counter: {this.state.counter}</p>
          <div className='btn-section'>
            <button onClick={this.handlerCounterUp}>Incremetar</button>
            <button onClick={this.handlerCounterDown}>Decrementar</button>
          </div>
        </div> */}
      </div>
    )
  }
}

export default App;