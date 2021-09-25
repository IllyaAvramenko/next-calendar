import s from '../styles/Home.module.scss';
import MainLayout from '../components/MainLayout';
import CalendarContainer from '../components/calendar/CalendarContainer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import ModalContainer from '../components/Modal/ModalContainer';

const Home = () => {

  return (
    <Provider store={store}>
      <MainLayout>
        <div  className={s.home}>
          <div className={s.homeContent}>
            <div className={s.title}>
              <h1>Choose the day <br/> for the meeting</h1>
              <p>We eucourage you to book your <br/> appointment online. <br/> This will save your time.</p>
            </div>
          </div>

          <CalendarContainer />

        </div>
      </MainLayout>
      <ModalContainer />
    </Provider>
  )
};

export default Home;