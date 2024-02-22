import './App.css';
import ReactQuiz from './components/React/ReactPage';
import Dashboard from './components/dashboard/dashboard';
import Login from './pages/Login/login';
import {Route,Routes} from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/React' element={<ReactQuiz/>}/>
    </Routes>
  )
}

export default App;
