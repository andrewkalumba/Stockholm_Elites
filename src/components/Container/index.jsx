import MainContent from "../MainContent"
import SideBar from "../SideBar"
import Slider from "../ImagesCount"
import styles from './container.module.css'

const Container = () => {
    return (
        <div className={styles.container}>
            <SideBar />
            <Slider />
            <SideBar />
        </div>
    )
}
export default Container