import React ,{useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
  const {feedback} = useContext(FeedbackContext);

    let average = feedback.reduce((acc, curr)=>{
        return acc + curr.rating
    },0) / feedback.length
  return (
    <div className='feedback-stats'>
        <h4> {feedback.length} review(s) </h4>
        <h4> Average rating {isNaN(average) ? 0: average}</h4>

    </div>
  )
}

export default FeedbackStats