import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { styled } from 'styled-components';
import { Home } from './pages/home';
import Header from './components/Header';
import { UserPerson } from './pages/user-pserson';
import { Professional } from './pages/professional';
import Footer from './components/Footer';

const AppPage = styled.div`
  // height: 100vh;
  // width: 100vw;
  
`
function App() {

  return (
    <AppPage className="App">
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    <Routes>
      <Route path='/pessoa-usuaria' element={<UserPerson />} />
    </Routes>
    <Routes>
      <Route path='/profissional' element={<Professional />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </AppPage>
  );
}

export default App;

