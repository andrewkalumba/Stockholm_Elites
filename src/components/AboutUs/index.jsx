import styles from './aboutUs.module.css'
import RentalsData from "../../data"
const AboutUs = () => {
      // Filter out the "about" section
      const aboutData = RentalsData.find((item) => item.about);
    
      return (
        <div className={styles.aboutUs}>
          <h2>About Us</h2>
          <p>{aboutData?.about}</p>
        </div>
      );
    };
    
export default AboutUs