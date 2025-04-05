import { useState } from "react";
import Buildings from "./components/Buildings";
import Container from "./components/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styles from './app.module.css';

function App() {
  const [selectedRental, setSelectedRental] = useState(null);

  const handleClick = (type, item) => {
    if (type === 'Home') {
      setSelectedRental(null);
    } else {
      setSelectedRental(item === 'About' || item === 'Contact' ? item : type);
    }
  };

  return (
    <div className={styles.MainContainer}>
      <Header selectedPage={selectedRental} onChangeRental={handleClick} />
      <div className={styles.gridContainer}>
        <div className={styles.containerBox}>
          {!selectedRental && <Container />}
        </div>
        <div className={styles.buildingsBox}>
          <Buildings selectedRental2={selectedRental} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
