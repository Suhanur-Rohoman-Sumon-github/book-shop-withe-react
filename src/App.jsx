import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      {/* header start here */}
      <Header></Header>
      {/* outlet start here */}
      <Outlet></Outlet>
      {/* footer start here */}
      <Footer></Footer>
    </div>
  );
};

export default App;