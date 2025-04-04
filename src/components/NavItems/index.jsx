import styles from './nav.module.css'
const NavItems = ({name, onChangeRental3 }) => {
    return(
      <div className={styles.menuItem} onClick={() => onChangeRental3(name === 'Home' ? null : {name})}> {name} </div>
    )
}

export default NavItems



