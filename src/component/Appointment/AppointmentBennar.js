import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';



const AppointmentBennar = ({date,setDate}) => {
   
    return (
        <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse gap-32">
    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='' />
    <div className='shadow-2xl rounded-lg'>
    <DayPicker
    mode="single"
    selected={date}
    onSelect={setDate}
    
    />
    <p className='ml-10'>You are selected : {format(date,'PP')}</p>
    </div>
  </div>
</div>
    );
};

export default AppointmentBennar;