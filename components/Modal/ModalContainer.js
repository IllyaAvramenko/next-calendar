import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../redux/calendarReducer';
import Modal from './Modal';

const CalendarContainer = (props) => {

   const closeModalWindow = () => {
      props.closeModal();
   };
   
   return <Modal isActive={props.isActive} closeModalWindow={closeModalWindow} date={props.date} />
};

const mapStateToProps = (state) => {
   return {
      isActive: state.calendar.modalActive,
      date: state.calendar.lastMeeting
   }
};

export default connect(mapStateToProps, { closeModal })(CalendarContainer);