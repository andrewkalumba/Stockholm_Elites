import { cities } from "../../data"
import NavItems from "../NavItems"
import styles from './navigation.module.css'

const Navigation = ({onChangeRental2,currentPage}) => {
    return (
        <nav className={styles.cities}>
            {cities.map((city, index) => <NavItems className={styles.city} key={index} name={city} onChangeRental3={() => onChangeRental2(city)} isActive={currentPage === city }/>)}
        </nav>
    )
}

export default Navigation


