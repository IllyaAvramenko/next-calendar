const SET_NEW_MEETING = 'SET_NEW_MEETING',
      CLOSE_MODAL = 'CLOSE_MODAL';

let initialState = {
   lastMeeting: {},
   modalActive: false
};

const calendarReducer = (state = initialState, action) => {

   switch(action.type) {

      case SET_NEW_MEETING:
         const newMeeting = { ...action.payload };
         return { ...state, lastMeeting: newMeeting,  modalActive: true }
      
      case CLOSE_MODAL:
         return { ...state, modalActive: false }

      default:
         return state;
   }

};

export const setNewMeeting = (month, day) => ({ type: SET_NEW_MEETING, payload: {month, day} });
export const closeModal = () => ({ type: CLOSE_MODAL });

export default calendarReducer;