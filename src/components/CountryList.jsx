import styles from './CountryList.module.css';
import Message from './Message';
import Spinner from './Spinner';
import CountryItem from './CountryItem';

/* eslint-disable */

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return <Message message='aucune ville donc pays visité pour le moment' />;

  let countries = cities.reduce((acc, cur) => {
    if (!acc.map((el) => el.country).includes(cur.country))
      return [...acc, { country: cur.country, emoji: cur.emoji }];
    else return acc;
  }, []);
  return (
    <ul className={styles.coutriesList}>
      {countries.map((country) => (
        <CountryItem country={country} />
      ))}
    </ul>
  );
}

export default CountryList;
