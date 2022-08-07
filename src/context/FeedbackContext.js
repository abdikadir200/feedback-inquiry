import {createContext,useState , useEffect} from "react";
const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) =>{
    const [editFeedback, seteditFeedback] = useState({
        item:{},
        edit: false,
    })
    const [feedback, setFeedback] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    //Add item to array
    const addFeedback = async (newFeedback) => {
        const response = await fetch("/feedback", {
            method: 'POST',
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(newFeedback),
        }
        )

        const data = await response.json()
        setFeedback([data, ...feedback]);
    }
    

      useEffect(()=>{
        fetchFeedback();
      },[])

      // Fetch data from backend
      const fetchFeedback = async() =>{
        const response = await fetch("/feedback");
        const data = await response.json();
        setFeedback(data);
        setIsLoading(false);
      }

      //Update feedback item
      const updateFeedback = async (id, updItem)=>{
        const respose = await fetch(`/feedback/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updItem)
        })
        const data = await respose.json();
        setFeedback(
        feedback.map((item) => (item.id === id? {...item, ...data} :item)))
      }

      //Delete item from backend
    const deleteFeedback = async (id)=>{
        if (window.confirm("are you sure you want to delete")){
            await fetch(`/feedback/${id}`,{method:"DELETE"})
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
            isLoading,
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