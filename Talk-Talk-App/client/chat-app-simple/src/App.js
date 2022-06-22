import React from 'react';
import ChatRoom from './components/ChatRoom';
import LoginRegisterForm from './components/LoginRegisterForm';
import Nav from './components/Nav';
import { Routes,Route } from 'react-router-dom';
import {createContext} from 'react';
import Home from './components/Home';

export const AppContext = createContext(null);


const App = () => {
  return (
    
    <AppContext.Provider>
    <div className='App'>  
      <Nav />
      
      <Routes>
      <Route path='/home' element={<Home title='Main-page' />} />
      <Route path='/login' element={<LoginRegisterForm title='Login' />} />
      <Route path='/register' element={<LoginRegisterForm title='Register' />} />
      <Route path='/chat-room' element={<ChatRoom title="Chat-Room" />} />
      </Routes>
    </div>
    </AppContext.Provider>
  )
}

export default App