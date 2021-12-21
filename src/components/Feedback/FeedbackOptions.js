import PropTypes from 'prop-types'

import styles from './FeedbackOptions.module.css'

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={styles.btn__section}>
      {Object.keys(options).map((key) => (
        <button
          className={styles.btn}
          key={key}
          onClick={() => onLeaveFeedback(key)}
        >
          {key}
        </button>
      ))}
    </div>
  )
}

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    onLeaveFeedback: PropTypes.func,
  }).isRequired,
}
