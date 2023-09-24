import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { styled } from 'styled-components';
import { Home } from './pages/home';
import Header from './components/Header';

const AppPage = styled.div`
  height: 100vh;
  width: 100vw;
  
`
function App() {

  return (
    <AppPage className="App">
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    </BrowserRouter>
    </AppPage>
  );
}

export default App;
