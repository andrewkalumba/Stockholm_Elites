import RentalsData from "../../data";
import AboutUs from "../AboutUs";
import ContactForm from "../ContactForm";
import SortedBuildings from "../SortedBuildings";
import styles from './building.module.css';

const Buildings = ({ selectedRental2 }) => {
  const filteredRentals = () => {
    if (!selectedRental2 || selectedRental2 === 'About' || selectedRental2 === 'Contact') return RentalsData;
    return RentalsData.filter(item => item.type === selectedRental2);
  };
  const imageItem1 = filteredRentals()[18]; 

  return (
    <div className={styles.menu}>
      <div className={styles.product}> { selectedRental2 === 'About' ? (<AboutUs item2={imageItem1} />
        ) : selectedRental2 === 'Contact' ? (<ContactForm />
        ): filteredRentals().length > 0 ? (filteredRentals().map((item, index) => (<SortedBuildings key={index} item2={item} />))
        ) : (
            <p>404</p>
        )}
      </div>
    </div>
  );
};

export default Buildings;






