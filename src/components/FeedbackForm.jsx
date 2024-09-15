import React, { useState, useContext, useEffect} from 'react'
import Card from './Card'
import Button from './Button';
import RatingSelect from './RatingSelect';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm() {
    const [text, settextInput] = useState('');
    const [rating , setRating] = useState(10);
    const [btnDisabled, setbtnDisabled] = useState(true);
    const [message, setMessage] = useState("");
    const{addFeedback, editFeedback, updateFeedback} = useContext(FeedbackContext);

    useEffect(()=>{
        if(editFeedback.edit === true){
            settextInput(editFeedback.item.text);
            setbtnDisabled(false);
            setRating(editFeedback.item.rating);
        }

    },[editFeedback])

    const handletextChange = ({ target: { value } })=>{

        if (value === ''){
            setbtnDisabled(true);
            setMessage(null)
        }else if (value.trim().length <=10){
            setbtnDisabled(true);
            setMessage("Input must be greater than 10 characters")
        }else {
            setbtnDisabled(false);
            setMessage(null);

        }
        settextInput(value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim().length > 10){
            const newFeedback = {
                text: text,
                rating : rating
            }

            if(editFeedback.edit === true){
            updateFeedback(editFeedback.item.id, newFeedback);

            }else {
                addFeedback(newFeedback);
            }
            settextInput("")
            setbtnDisabled(true) 
            setRating(10)
        }
        
    }
  return (
    <Card> 
    <form onSubmit={handleSubmit}>
    <h2> PLease rate us</h2>
    <RatingSelect select={setRating} selected={rating}/>
    <div className='input-group'> 
    
    <input 
    type='text' 
    onChange={handletextChange}
    placeholder='what is your rating'
    value={text}/> 
    <Button type="submit" version="secondary" isDisabled={btnDisabled}> Send </Button>
    </div>
    <div> {message}</div>
    </form>
    </Card>
   
  )
}

export default FeedbackForm