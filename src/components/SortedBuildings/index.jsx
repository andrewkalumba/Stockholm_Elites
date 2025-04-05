import { useState } from 'react';
import styles from './sorted.module.css'
import { getImageUrl } from '../../utils/function'

const SortedBuildings = ({ item2 }) => {
    const [showMore, setShowMore] = useState(false);
    const handleClick = () => {
        setShowMore(!showMore)
    }
    return (
        <div className={styles.item}>
            <h3>{item2.type}</h3>
            <h6>{`Location: ${item2.city}`}</h6>
            <img src={getImageUrl(item2.images)} alt={item2.type} style={{ width: '300px', height: '200px' }} />
            <p>{`Address: ${item2.address}`}</p>
            <p>{`Price: ${item2.price_per_month} kr`}</p>
            <p>{`Size: ${item2.size_sqm} sqm`}</p>
            <p>{`No of rooms: ${item2.rooms}`}</p>
            <p>{`Inclusives: ${item2.features}`}</p>

            {showMore && (
                  <div className={styles.moreInfo}>
              <p>{`Utilities: ${item2.utilities}`}</p>
              <p>{`Transport Means: ${item2.transport}`}</p>
              <p>{`Amenities: ${item2.amenities}`}</p>
              </div>
            )}

            <button onClick={handleClick}>
                {showMore ? 'Show Less' : 'Read More'}
            </button>

        </div>
    )
}


export default SortedBuildings