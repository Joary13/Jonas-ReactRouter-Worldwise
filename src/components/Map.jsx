import { Link } from 'react-router-dom';
import styles from './Map.module.css';

function Map() {
  return (
    <div className={styles.mapContainer}>
      <Link to='form'>Map</Link>
    </div>
  );
}

export default Map;
