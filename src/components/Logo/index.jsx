import logo from '../../assets/rentalLogo.jpg'
import styles from './logo.module.css'

const Logo = () => {
    return (
        <img className={styles.image} src={logo} alt="rentals" />
    )
}

export default Logo