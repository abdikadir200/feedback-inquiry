import {createContext,useState } from "react";
import {v4 as uuidv4} from "uuid";
const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) =>{
    const [editFeedback, seteditFeedback] = useState({
        item:{},
        edit: false,
    })
    const [feedback, setFeedback] = useState([
        {
            id:1,
            text: 'This is a feedback text 1',
            rating:10,
        },
        {
            id:2,
            text: 'This is a feedback text 2',
            rating:9,
        },
        {
            id:3,
            text: 'This is a feedback text 3',
            rating:8,
        }
    ])
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
      }

      //Update feedback item
      const updateFeedback = (id, updItem)=>{
        setFeedback(
        feedback.map((item) => (item.id === id? {...item, ...updItem} :item)))
      }

    const deleteFeedback = (id)=>{
        if (window.confirm("are you sure you want to delete")){
          setFeedback(feedback.filter((item)=> item.id!==id))
      }}

      const editFeedbackItem = (item)=>{
        seteditFeedback({
            item,
            edit:true,
        })
      }

    return (
        <FeedbackContext.Provider value={{
            feedback,
            editFeedback,
            deleteFeedback,
            addFeedback,
            editFeedbackItem,
            updateFeedback,
                        
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}
export default FeedbackContext;