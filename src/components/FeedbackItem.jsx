
import { useContext } from "react";
import Card from "./Card";
import {FaTimes, FaEdit} from 'react-icons/fa';
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({item}) {   
  const {deleteFeedback,editFeedbackItem} = useContext(FeedbackContext);
  return (
    <Card>
    <div className='num-display'> {item.rating} </div>
    <button onClick={()=>deleteFeedback(item.id)} className="close"> 
    <FaTimes color="purple"/>
    </button >
    <button onClick={()=>editFeedbackItem(item)}className="edit"> 
    <FaEdit />
    </button>
    <div className='text-display'> {item.text} </div>
    </Card>
  )
}

export default FeedbackItem