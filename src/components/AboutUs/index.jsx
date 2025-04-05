import styles from './aboutUs.module.css'
import RentalsData from "../../data"
import { getImageUrl } from '../../utils/function';
const AboutUs = ({item2}) => {
      const aboutData = RentalsData.find((item) => item.about);
    
      return (
        <div className={styles.aboutUs}>
          <h2>About Us</h2>
          <p>{aboutData.about}</p>
          <img src={getImageUrl(item2.images)} alt="founder"  style={{ width: '300px', height: '200px' }} />
        </div>
      );
    };
    
export default AboutUs