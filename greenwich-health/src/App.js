import React, { useReducer } from 'react';
import logo from './logo.svg';
import Navigation from './components/navigation';
import Study from './components/study';
import Header from './components/header';
import QuestionButton from './components/question-button';

export const AppContext = React.createContext();

// Set up Initial State
const initialState = {
  sectionId: 0,
};

function reducer(state, action) {
  switch (action.type) {
      case 'UPDATE_SECTION':
          return {
            sectionId: action.data
          };


      default:
          return initialState;
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="flex flex-col w-screen h-screen">
      <Header/>
    <div className="flex w-full h-full">
      <AppContext.Provider value={{ state, dispatch }}>
        <Navigation/>
        <Study />
      </AppContext.Provider>
    </div>
    <QuestionButton/>
    </div>
  );
}
export default App;
