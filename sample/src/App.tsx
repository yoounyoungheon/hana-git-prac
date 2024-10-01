import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/routing/Home';
import {Items} from './components/routing/Items';
import Nav from './components/Nav';
import { LoginWrapper } from './components/routing/LoginWrapper';
import { SessionProvider } from './components/context-api/SessionContext';
import { NotFoundPage } from './components/routing/NotFoundPage';
import { My }from './components/routing/My';
import ItemLayout from './components/routing/ItemLayout';

function App() {
  return (
    <SessionProvider>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/login' element={<LoginWrapper/>}></Route>
      <Route path='/my' element={<My/>}></Route>
      <Route path="/items" element={<ItemLayout />} />
      <Route path='/items/:id' element={<Items/>}></Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    </SessionProvider>
  );
}

export default App;