import styles from './pageTitle.module.css'

const PageTitle = ({ currentPage }) => {
    let title = "Stockholm Elites AB";
  
    if (currentPage === 'About') title = "About Us";
    else if (currentPage === 'Contact') title = "Contact Us";
    else if (currentPage) title = `Elite ${currentPage}s`;
  
    return (
      <h1 className={styles.pageTitle}>{title}</h1>
    );
  };
  
  export default PageTitle;