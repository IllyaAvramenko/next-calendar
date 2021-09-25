import React from 'react';
import { connect } from 'react-redux';
import { setNewMeeting } from '../../redux/calendarReducer';
import moment from 'moment';
import Calendar from './calendar';
import { useState } from 'react';

const CalendarContainer = (props) => {

   moment.updateLocale('en', {week: {dow: -1}});

   const [today, setToday] = useState(moment());
   
   const startDay = today.clone().startOf('month').startOf('week');

   const displayMonth = today.format('MMMM'),
         displayYear = today.format('YYYY');

   const day = startDay.clone(),
         daysArray = [...Array(42)].map(() => day.add(1, 'day').clone()),
         weekArray = [...Array(7)].map((_, i) => moment().day(i).format('ddd'))


   const isCurrentDay = (day) => moment().isSame(day, 'day');
   const prevHandler = () => setToday(prev => prev.clone().subtract(1, 'month'));
   const nextHandler = () => setToday(prev => prev.clone().add(1, 'month'));

   const newMeeting = (date) => {
      const month = date.format('MMMM');
      const day = date.format('Do dddd');
      props.setNewMeeting(month, day);
   };
   
   return <Calendar daysArray={daysArray}
                    weekArray={weekArray}
                    displayMonth={displayMonth}
                    displayYear={displayYear}
                    isCurrentDay={isCurrentDay}
                    prevHandler={prevHandler}
                    nextHandler={nextHandler}
                    newMeeting={newMeeting} />
};

const mapStateToProps = (state) => {
   return {}
};

export default connect(mapStateToProps, { setNewMeeting })(CalendarContainer);