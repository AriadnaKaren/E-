import React from 'react'
import NavBar from './components/NavBar'
import Header from './components/Header'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return <>

    <Header/>
    <NavBar/>
    <ItemListContainer greetings={'Bienvenidos'}/>

  </>
  
}

export default App
