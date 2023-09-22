import css from './Statistic.module.css';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <div className={css.wrapper}>
        <h3>Statistics</h3>
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
        </ul>
      </div>
      <p>Total: {total}</p>
      <p className={`${positivePercentage}` >= 50 ? css.green : css.red}>
        Positive feedback: {positivePercentage}%
      </p>
    </>
  );
};

export default Statistics;
