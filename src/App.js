import React from 'react';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainRoutes from './routes/MainRoutes';


const App = () => {
  return (
    <div>
    <Header />
    <MainRoutes />
    </div>
  );
};

export default App;