import styles from './GoTopButton.module.css'

import { useState, useEffect } from 'react';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';


function GoTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > 200);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleGoTopClick() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div
      className={`${styles.go_top_button} ${isVisible ? styles.visible : ''}`}
      onClick={handleGoTopClick}
    >
      <BsFillArrowUpCircleFill />
    </div>
  );
}

export default GoTopButton;
