import PropTypes from 'prop-types'

import styles from './Statistics.module.css'

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={styles.btn__container}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <span className={styles.text}>Good:</span> {good}
        </li>
        <li className={styles.item}>
          <span className={styles.text}>Neutral:</span>
          {neutral}
        </li>
        <li className={styles.item}>
          <span className={styles.text}>Bad:</span>
          {bad}
        </li>
        <li className={styles.item}>
          <span className={styles.text}>Positive Feedback:</span>
          {positivePercentage()}%
        </li>
        <li className={styles.item}>
          <span className={styles.text}>Total:</span>
          {total()}
        </li>
      </ul>
    </div>
  )
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func,
  positivePercentage: PropTypes.func,
}
export default Statistics
