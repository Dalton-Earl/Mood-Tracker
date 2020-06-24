import React from "react";

export default function NewActivity(props){
    return(
        <form action="#">
        <p>
          <label>
            <input name="group1" type="radio" checked />
            <span>Done</span>
          </label>
        </p>
        <p>
          <label>
            <input name="group1" type="radio" />
            <span>1-5</span>
          </label>
        </p>
        <p>
          <label>
            <input name="group1" type="radio"  />
            <span>1-10</span>
          </label>
        </p>
        
      </form> 
    )
}