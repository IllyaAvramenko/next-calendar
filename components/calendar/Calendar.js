import React from 'react';
import s from '../../styles/Calendar.module.scss';
import rigthArrow from '../../assets/icons/right-arrow.png';

const Calendar = ({daysArray, weekArray, isCurrentDay, displayMonth, displayYear, prevHandler, nextHandler, newMeeting}) => {

   return (
       <>
         <div className={s.calendar}>
            <div className={s.calendarWrapper}>

               <div className={s.header}>
                  <div className={s.headerWrap}>
                     <div className={s.headerWrapper}>
                        <button onClick={prevHandler}>
                           <img src={rigthArrow.src} />
                        </button>

                        <span>{displayMonth} {displayYear}</span>

                        <button onClick={nextHandler}>
                           <img src={rigthArrow.src} />
                        </button>
                     </div>

                     <div className={s.decLine}></div>
                  </div>
               </div>


               <div className={s.calendarMain}>
                  <div className={s.mainWrap}>
                  {
                     daysArray.map((day) => (
                        <div onClick={() => {newMeeting(day)}} 
                             className={ isCurrentDay(day) ? `${s.calendarItem} ${s.current}` : s.calendarItem }
                             key={day.format('DDMMYYYY')} >
                              
                           {day.format('DD')}
                        </div>
                     ))
                  }
                  </div>
               </div>


               <div className={s.calendarFooter}>
                  <div className={s.decLine}></div>
                  <div className={s.footerWrapper}>
                     {
                        weekArray.map((day) => (
                            <div className={s.weekItem} key={day}>
                               <span>{day.substr(0, 1)}</span>
                            </div>
                        ))
                     }
                  </div>
                  <div className={s.decLine}></div>
               </div>
            </div>
         </div>
          
       </>
   )
};

export default Calendar;