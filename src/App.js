import './App.css';
import { useAuthStateContext } from './AuthProvider';
import ReactQuiz from './components/React/ReactPage';
import Dashboard from './components/dashboard/dashboard';
import Login from './pages/Login/login';
import {Route,Routes} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Signup from './pages/Signup/Signup';


function App() {
  const status= useAuthStateContext();

  return (
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path='/login' element={<Login/>} render={() =>
       status.Authenticated===true ? <Dashboard /> : <Link to="/login"/>}/>
      <Route path='/React' element={<ReactQuiz/>}/>
      <Route path='/SignUp' element={<Signup/>}/>
    </Routes>
  )
}

export default App;
