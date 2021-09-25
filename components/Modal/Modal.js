import s from '../../styles/Modal.module.scss';
import close from '../../assets/icons/close.png';

const Modal = ({isActive, closeModalWindow, date}) => {

    return (
        <div className={isActive ? `${s.popup} ${s.active}` : s.popup} onClick={() => closeModalWindow()}>
            <div className={s.popupContent} onClick={e => e.stopPropagation()}>
                <div className={s.popupCloseWrapper}>

                    <div onClick={() => closeModalWindow()} className={s.popupClose}>
                        <img src={close.src} alt="close button" />
                    </div>

                </div>
                <div className={s.popupWrapper}>

                    <div className={s.popupBlock}>
                        <div className={s.top}>
                            <p>Month</p>
                        </div>
                        <div className={s.bottom}>
                            <input value={date.month}></input>
                        </div>
                    </div>
                    <div className={s.popupBlock}>
                        <div className={s.top}>
                            <p>Day</p>
                        </div>
                        <div className={s.bottom}>
                            <input value={date.day}></input>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default Modal;