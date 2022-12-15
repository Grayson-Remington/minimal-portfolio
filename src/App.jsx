import React from 'react';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {

  return (
    <div className="App">
      <Intro />
      <Portfolio />
      <Experience />
    </div>
  )
}

export default App