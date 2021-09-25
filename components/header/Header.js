import s from '../../styles/Header.module.scss';
import Link from 'next/link';
import logo from '../../assets/images/logo.png';

const Header = () => {

  return (
   <header className={s.header}>
      <div className={s.headerContainer}>
         <div className={s.logo}>
            <img src={logo.src} alt="main logo"/>
         </div>
         <div className={s.headerNav}>
            <div className={s.navItem}>
               <Link href={'/'}>
                  <a>Home</a>
               </Link>
            </div>
            <div className={s.navItem}>
               <Link href={'/about'}>
                  <a>About Us</a>
               </Link>
            </div>
         </div>
      </div>
   </header>
  )
};

export default Header;