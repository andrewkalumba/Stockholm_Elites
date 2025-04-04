import styles from './date.module.css'

 const Date = () => {
  let today = new Date();
  // Get day, month (with +1 since getMonth starts from 0), and year
  const day = today.getDate();
  const month = today.getMonth() + 1; // Months are zero-based
  const year = today.getFullYear(); // Use getFullYear to get the full year

  return (
      <div className={styles.date}>
          {day + "/" + month + "/" + year}
      </div>
  );
}

export default Date;