import styles from './CityList.module.css';
import Spinner from './Spinner';
import CityItem from './CityItem';
import Message from './Message';
import useCities from '../contexts/useCities';

// import PropTypes from 'prop-types';

// CityList.propTypes = {
//   cities: PropTypes.array,
//   isLoading: PropTypes.bool.isRequired,
// };

/*eslint-disable*/

function CityList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message='Add your first city by clicking on a city on the map' />
    );
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
