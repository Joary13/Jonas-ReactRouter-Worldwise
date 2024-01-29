import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import styles from './Map.module.css';

/*eslint-disable*/

function Map() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');
  return (
    <div className={styles.mapContainer} onClick={() => navigate('form')}>
      <Link to='form'>Map</Link>
      <h1>Map</h1>
      <h1>
        Position {lat} {lng}
      </h1>
      <button onClick={() => setSearchParams({ lat: 50, lng: 12 })}>
        click for change
      </button>
    </div>
  );
}

export default Map;
