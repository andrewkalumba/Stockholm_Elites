import styles from './header.module.css'
import Navigation from "../Navigation"
import Logo from '../Logo'
import HamburgerMenu from '../HamburgerMenu'

const Header = ({ onChangeRental }) => {
    return (
        <div className={styles.header}>
            <Logo />
            <Navigation onChangeRental2={onChangeRental} />
            <HamburgerMenu onChangeRental2={onChangeRental}/>
        </div>
    )
}
export default Header