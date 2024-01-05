//libraries
import { Routes, Route } from 'react-router-dom';
//hook
import { useLocation } from 'react-router-dom';
//Pages
import Landing from './views/Landing/Landing.jsx';
import Home from './views/Home/Home.jsx';
import Form from './views/Form/Form.jsx';
import Detail from './views/Detail/Detail.jsx';
//components
import Nav from './components/Nav/Nav.jsx';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== '/' && <Nav />}
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/form' element={<Form />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App
