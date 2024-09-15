import React, {useContext} from 'react'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'


function FeedbackList() {
  const {feedback, isLoading} = useContext(FeedbackContext);

  if( !isLoading && (!feedback || feedback.length === 0)){
    return <p> feedback yet</p>
  }
  return (
    <div className='feeback-list'>
        {feedback.map((item, index)=>(
            <FeedbackItem key={index} item={item}/>
        ))}
    </div>
  )
}

export default FeedbackList