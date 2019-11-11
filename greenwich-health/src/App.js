import React from 'react';
import logo from './logo.svg';
import Navigation from './components/navigation';
import Study from './components/study';
import Header from './components/header';
import QuestionButton from './components/question-button';

function App() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <Header/>
    <div className="flex w-full h-full">
      <Navigation/>
      <Study />
    </div>
    <QuestionButton/>
    </div>
  );
}

export default App;
