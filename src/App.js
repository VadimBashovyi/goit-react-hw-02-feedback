import React, { Component } from 'react'
import './App.css'
import Section from './components/Section'
import Statistics from './components/Statistics'
import FeedbackOptions from './components/Feedback'
import Notification from './components/Notification'

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
  feedbackCounter = (e) => {
    this.setState((preState) => {
      return {
        [e]: preState[e] + 1,
      }
    })
  }
  countTotalFeedback = () => {
    const values = Object.values(this.state)
    let total = values.reduce((total, value) => total + value, 0)
    return total
  }
  countPositiveFeedbackPercentage = () => {
    let positive = 0
    let total = this.countTotalFeedback()
    positive = Math.round((this.state.good * 100) / total)
    return positive
  }

  render() {
    const { good, neutral, bad } = this.state
    let isTotal = good + neutral + bad

    return (
      <div>
        <Section title="Please leave Feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.feedbackCounter}
          />
        </Section>
        <div>
          {isTotal ? (
            <Section title="Statistic">
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback}
                positivePercentage={this.countPositiveFeedbackPercentage}
              />
            </Section>
          ) : (
            <Notification message="No feedback" />
          )}
        </div>
      </div>
    )
  }
}

export default App
