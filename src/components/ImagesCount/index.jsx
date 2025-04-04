
import { useState } from "react"
import RentalsData from "../../data"
import { getImageUrl } from "../../utils/function"
import { BsArrowDownLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"
import ContactForm from "../ContactForm"
import styles from './slider.module.css'
const Slider = () => {
    const [slide, setSlide] = useState(0);
    const totalSlides = RentalsData.slice(0, 5).length;

    const nextSlide = () => {
        setSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    };

    const prevSlide = () => {
        setSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
    };

    return (
        <div className={styles.slider}>
            <BsArrowDownLeftCircleFill className={`${styles.arrow} ${styles.leftarrow}`} onClick={prevSlide} />
            {RentalsData.slice(0, 5).map((rental, index) => (<div key={index}> <img className={slide === index ? styles.images : styles.imageHidden} src={getImageUrl(rental.images)} alt={`Rental at ${rental.address}`} /> </div> ))}

            <BsArrowRightCircleFill className={`${styles.arrow} ${styles.rightarrow}`} onClick={nextSlide} />
            <span className={styles.indicators}> {RentalsData.slice(0, 5).map((item, index) => ( <button className={slide === index ? styles.indicator : styles.indicatorInactive} key={index} item={item}onClick={() => setSlide(index)} /> ))} </span> 

        </div>
        
    );
};

export default Slider;