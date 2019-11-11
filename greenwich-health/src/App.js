import React from 'react';
import logo from './logo.svg';
import Navigation from './components/navigation';
import Study from './components/study';
import Header from './components/header';

function App() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <Header/>
    <div className="flex w-full h-full">
      <Navigation/>
      <Study />
    </div>
    </div>
  );
}

export default App;
