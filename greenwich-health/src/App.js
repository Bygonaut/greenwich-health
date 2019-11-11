import React from 'react';
import logo from './logo.svg';
import Navigation from './components/navigation';
import Study from './components/study';

function App() {
  return (
    <div className="flex">
      <Navigation/>
      <Study />
    </div>
  );
}

export default App;
