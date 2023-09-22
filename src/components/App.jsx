import React, { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import css from '../components/AppStyle.module.css';
export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = value => {
    switch (value) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedbacks = () => good + neutral + bad;
  const totalFeedback = countTotalFeedbacks();
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedbacks();
    const result = (good / total) * 100;
    return total === 0 ? 0 : result.toFixed();
  };
  const feedbackOptions = Object.keys({ good, neutral, bad });
  const positiveFeedbackPercentage = countPositiveFeedbackPercentage();
  return (
    <>
      <Section className={css.title} title="Please leave feedback">
        <FeedbackOptions
          options={feedbackOptions}
          onLeaveFeedback={handleFeedback}
        />
        {totalFeedback > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
