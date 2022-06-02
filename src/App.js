import { Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'animate.css';
import 'aos/dist/aos.css';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer } from 'react-toastify';
import './App.css';
import About from './component/About/About';
import Appointment from './component/Appointment/Appointment';
import Contact from './component/Contact/Contact';
import Heder from './component/Heder/Heder';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import Review from './component/Review/Review';
import RequireAuth from './component/Login/RequireAuth';
import DashBoard from './component/DashBoard.js/DashBoard';
import MyAppoinment from './component/DashBoard.js/MyAppoinment';
import MyReview from './component/DashBoard.js/MyReview';
import MyStory from './component/DashBoard.js/MyStory';
import AllUser from './component/DashBoard.js/AllUser';
import RequireAdmin from './component/Login/RequireAdmin';
import AddDoctors from './component/DashBoard.js/AddDoctors';
import ManageDoctors from './component/DashBoard.js/ManageDoctors';

function App() {
  AOS.init();

  // You can also pass an optional settings object
  // below listed default settings
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 300, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 500, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });
  return (
    <div>
     <Heder></Heder>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='about' element={<About></About>}></Route>
       <Route path='/appointment' element={<RequireAuth>
        <Appointment></Appointment>
       </RequireAuth>}></Route>
       <Route path='/dashboard' element={<RequireAuth>
        <DashBoard></DashBoard>
       </RequireAuth>}>
         <Route index element={<MyAppoinment></MyAppoinment>}></Route>
         <Route path='myreview' element={<MyReview></MyReview>}></Route>
         <Route path='mystory' element={<MyStory></MyStory>}></Route>
         <Route path='alluser' element={<RequireAdmin><AllUser></AllUser></RequireAdmin>}></Route>
         <Route path='doctor' element={<RequireAdmin><AddDoctors></AddDoctors></RequireAdmin>}></Route>
         <Route path='manageDoctor' element={<RequireAdmin><ManageDoctors></ManageDoctors></RequireAdmin>}></Route>
       </Route>
       <Route path='/review' element={<Review></Review>}></Route>
       <Route path='/contact' element={<Contact></Contact>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/register' element={<Register></Register>}></Route>
     </Routes>
     <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
