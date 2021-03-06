import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home/Home';
import Hotel from './Components/Hotel/Hotel';
import List from './Components/List/List';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} exact/>
          <Route path='/home' element={<Home/>} exact/>
          <Route path='/hotels' element={<List/>}/>
          <Route path='/hotel' element={<Hotel/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
