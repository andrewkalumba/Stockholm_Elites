import { Divide } from "hamburger-react";
import { useState } from "react";
import styles from './hamburgerMenu.module.css';
import NavItems from "../NavItems";
import { cities } from "../../data";

const HamburgerMenu = ({onChangeRental2}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(open => !open); // Toggling the menu 
    };

    return (
        <>
            <div className={styles.hamburger} onClick={toggleMenu}>
                <Divide duration={0.9} color="#4FD1C5"/>
            </div>
            <div> 
                {isOpen &&  <nav className={styles.cities}>
            {cities.map((city, index) => <NavItems className={styles.city} key={index} name={city} onChangeRental3={() => onChangeRental2(city)}/>)}
        </nav>}
            </div >
        </>
    );
};

export default HamburgerMenu;


