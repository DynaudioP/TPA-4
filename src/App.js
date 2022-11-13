import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav'
import Homepage from './pages/Homepage'
import Aboutpage from './pages/Aboutpage';
import Projekpage from './pages/Projekpage';
import Blogpage from './pages/Blogpage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/home' element={<Homepage/>}/>
        <Route path='/tentang' element={<Aboutpage/>}/>
        <Route path='/projek' element={<Projekpage/>}/>
        <Route path='/blog' element={<Blogpage/>}/>
      </Routes>
      <Footer/>
    </>
    
  );
}

export default App;
