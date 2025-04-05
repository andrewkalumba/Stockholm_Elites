import styles from './header.module.css';
import Navigation from "../Navigation";
import Logo from '../Logo';
import HamburgerMenu from '../HamburgerMenu';
import PageTitle from '../PageTitle';

const Header = ({ onChangeRental, selectedPage }) => {
    return (
        <header className={styles.header}>
            <Logo />
            <div className={styles.page}>
                <PageTitle currentPage={selectedPage} />
                <Navigation onChangeRental2={onChangeRental} currentPage={selectedPage}/>
            </div>
            <HamburgerMenu onChangeRental2={onChangeRental} />
        </header>
    );
};

export default Header;
