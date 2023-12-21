import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from '../components/NavBarComponent/NavBarComponent'

import { Home } from '../pages/Home';
import { ItemDetailContainer } from '../pages/ItemDetailContainer';
import { Category } from '../pages/Category';


export const MainRouter = () => {

  return (

    <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/item/:id' element={ <ItemDetailContainer /> } />
            <Route path='/category/:id' element={ <Category /> } />
        </Routes>
    </BrowserRouter>
  );
};