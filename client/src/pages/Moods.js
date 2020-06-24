import React, {useState, useEffect} from "react";
import API from "../utils/API";



function Moods() {
    const [moods, setMoods] = useState([])

    const [formObject, setFormObject] = useState([])

    useEffect(()=>{
        loadMoods()
    }, [])

    function loadMoods(){
        API.getMoods()
        .then(res =>
            setMoods(res.data)
            )
            .catch(err => console.log(err));

    };

    function updateMood(id){
        API.updateMood(id)
        .then(res => loadMoods())
        .catch(err => console.log(err));
    };
    function handleInputChange(event){
        const {name, value } = event.target;
        setFormObject({...formObject, [name]: value})
    };

    function handleFormSubmit(event){
        event.preventDefault();
        if (formObject.mood){
            API.saveMood({
                date: formObject.date,
                mood: formObject.moods
            })
            .then(res => loadMoods())
            .catch(err => console.log(err));
        }
    }
    

    return(
        <div>
            This is where the moods will be displayed on charts 
        </div>
    )

}

export default Moods