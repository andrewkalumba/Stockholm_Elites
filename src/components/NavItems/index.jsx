import styles from './nav.module.css'

const NavItems = ({name, onChangeRental3, isActive }) => {
    return(
      <div className={`${styles.menuItem} ${isActive ? styles.active : ''}`} onClick={() => onChangeRental3(name === 'Home' ? null : {name})}> {name} </div>
      
    )
}

export default NavItems


