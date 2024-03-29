import { Link } from 'react-router-dom';
import styles from './CityItem.module.css';
import useCities from '../contexts/useCities';

// import PropTypes from 'prop-types';

// CityItem.propTypes = {
//   city: PropTypes.object,
// };

/*eslint-disable*/
const formatDate = (date) =>
  new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));

function CityItem({ city }) {
  const { currentCity, deleteCity } = useCities();
  const { cityName, emoji, date, id, position } = city;
  // console.log(date);

  function handleClick(e) {
    e.preventDefault();
    deleteCity(id);
  }

  return (
    <li>
      <Link
        className={`${styles.cityItem} ${
          currentCity.id === id ? styles['cityItem--active'] : ''
        }`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>({formatDate(date)})</time>
        <button className={styles.deleteBtn} onClick={handleClick}>
          &times;
        </button>
        {/* onClick={()=> */}
      </Link>
    </li>
  );
}

export default CityItem;
