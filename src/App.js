import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Appointment from './component/Appointment/Appointment';
import Contact from './component/Contact/Contact';
import Heder from './component/Heder/Heder';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import Review from './component/Review/Review';

function App() {
  return (
    <div>
     <Heder></Heder>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='about' element={<About></About>}></Route>
       <Route path='/appoinment' element={<Appointment></Appointment>}></Route>
       <Route path='/review' element={<Review></Review>}></Route>
       <Route path='/contact' element={<Contact></Contact>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/register' element={<Register></Register>}></Route>
     </Routes>
    </div>
  );
}

export default App;
