import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Main from './components/Main';
import Navbar from './components/NavBar';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/dashboard' element={<Main/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
