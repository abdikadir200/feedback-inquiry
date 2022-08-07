import React, {useContext} from 'react'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'


function FeedbackList() {
  const {feedback} = useContext(FeedbackContext);
  return (
    <div>
        {feedback.map((item, index)=>(
            <FeedbackItem key={index} item={item}/>
        ))};
    </div>
  )
}

export default FeedbackList